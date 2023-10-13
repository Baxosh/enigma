import { css, StyleSheet } from 'aphrodite'
import cn from 'classnames'
import debounce from 'lodash/debounce'
import React, { useCallback, useState } from 'react'
import isEmpty from 'lodash/isEmpty'
import { useHistory } from 'react-router-dom'
import queryString from 'query-string'
import { useQueryParams } from '../../hooks/queryString'
import useTrans from '../../hooks/trans'

export default function Search({ onSearch, className, ...attributes }) {
    const { search } = useQueryParams()
    const history = useHistory()
    const [value, setValue] = useState(search || '')
    const t = useTrans()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const onChange = useCallback(debounce(({ target }) => {
        history.push(`?${queryString.stringify({ search: target.value })}`)
    }, 500), [])

    return (
        <div className={cn('columns column is-mobile', className)}>
            <input
                name="search"
                // eslint-disable-next-line jsx-a11y/no-autofocus
                autoFocus={!isEmpty(value)}
                value={value}
                onChange={(event) => {
                    setValue(event.target.value)
                    event.persist()
                    onChange(event, setValue)
                }}
                className={cn('input is-small', css(styles.input))}
                placeholder={`${t('search')}...`}
                {...attributes} />

            <span className={css(styles.span)}>
                <ion-icon name="search-outline" />
            </span>
        </div>
    )
}

const styles = StyleSheet.create({
    input: {
        maxWidth: '22rem',
    },
    span: {
        position: 'absolute',
        zIndex: '1',
        marginLeft: '125px',
    },
})
