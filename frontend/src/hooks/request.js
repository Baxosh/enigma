import { useCallback, useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import uniqBy from 'lodash/uniqBy'
import humps from 'humps'
import { auth, getToken, signOut } from '../utils/auth'
import baseAxios, { domain } from '../utils/request'

// eslint-disable-next-line import/no-cycle
import { useMessage } from './message'

export function usePostRequest(options = {}) {
    return useRequest({ method: 'POST', ...options })
}

export function usePutRequest(options = {}) {
    return useRequest({ method: 'PUT', ...options })
}

export function useGetRequest(options = {}) {
    return useRequest({ method: 'GET', ...options })
}

export function useDeleteRequest(options = {}) {
    return useRequest({ method: 'DELETE', ...options })
}

export function useRequest(options = {}, defaultLoading = false) {
    const [response, setResponse] = useState(null)
    const [loading, setLoading] = useState(defaultLoading)
    const [error, setError] = useState({})
    const [showMessage] = useMessage()

    const history = useLocation()

    async function request(overrideOptions = {}, sync = false) {
        setLoading(true)

        try {
            const { data } = await baseAxios({ ...auth(), ...options, ...overrideOptions })
            if (!sync) setResponse(data)
            return { response: data, success: true }
        } catch (e) {
            setError(e.response)
            if (e.response === undefined) {
                showMessage('Проверьте интернет соединение', 'is-danger')
            } else if (e.response.status >= 500) {
                showMessage('Ошибка сервера.', 'is-danger')
            } else if (e.response.status === 401) {
                signOut(history)
            }

            return { error: e.response, success: false }
        } finally {
            if (!sync) setLoading(false)
        }
    }

    return { loading, request, error, response, setResponse, setError, setLoading }
}

export function useLoad(options, dependencies = [], load = true) {
    const request = useRequest({ method: 'GET', ...options }, true)

    useEffect(() => {
        if (load) {
            request.request()
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies)

    return request
}

export function useInfiniteScroll(options, dependencies = []) {
    const [page, setPage] = useState(1)
    const items = useGetRequest({ ...options, params: { ...options.params, page } })
    const [hasMore, setHasMore] = useState(false)
    const observer = useRef()

    useEffect(() => {
        loadItems()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, ...dependencies])

    async function loadItems() {
        const { response } = await items.request()
        const oldItems = items.response ? items.response.results : []
        const newItems = response ? response.results : []

        if (!response) return

        items.setResponse({
            ...response,
            count: response ? response.count : 0,
            results: uniqBy([...oldItems, ...newItems], 'id'),
        })
        setHasMore(oldItems.length + newItems.length !== response.count)
    }

    function reset() {
        items.setResponse({ count: 0, results: [] })
        setPage(1)
    }

    async function reload() {
        reset()
        await items.request({ params: { ...options.params, page: 1 } })
    }

    const ref = useCallback((node) => {
        if (items.loading) return

        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && hasMore) {
                setPage(page + 1)
            }
        })
        if (node) observer.current.observe(node)
    }, [hasMore, items.loading, page])

    return {
        ref, ...items, hasMore, reload, reset,
    }
}

export function useStream(url, onMessage) {
    const [data, setData] = useState()

    useEffect(() => {
        const connection = new EventSource(`${domain}/api/v1${url}?authentication_token=${getToken()}`)
        connection.onmessage = (response) => {
            const responseData = humps.camelizeKeys(JSON.parse(response.data))
            setData(responseData)
            onMessage(responseData, connection)
        }
        return () => connection.close()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url])

    return { data }
}
