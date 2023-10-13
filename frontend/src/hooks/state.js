import React, { useEffect, useRef, useState } from 'react'

export function usePersistState(key, defaultValue) {
    const [state, setState] = useState(() => {
        const value = localStorage.getItem(key)
        try {
            return JSON.parse(value) || defaultValue
        } catch (e) {
            return value || defaultValue
        }
    })
    useEffect(() => {
        const value = typeof state === 'object' ? JSON.stringify(state) : state
        localStorage.setItem(key, value)
    }, [key, state])
    return [state, setState]
}

export function useForceUpdate() {
    const [, forceUpdate] = React.useState(false)
    return () => forceUpdate((value) => !value)
}

export function usePropsChanged(func, dependencies) {
    const rerender = useRef(false)
    useEffect(() => {
        if (rerender.current) {
            func()
        }
        rerender.current = true
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies)
}
