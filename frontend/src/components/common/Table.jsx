import { css, StyleSheet } from 'aphrodite'
import cn from 'classnames'
import queryString from 'query-string'
import isEmpty from 'lodash/isEmpty'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { useQueryParams } from '../../hooks/queryString'

import Loader from './Loader'
import Pagination from './Pagination'
import useTrans from '../../hooks/trans'

export default function Table({
    loading = false,
    totalCount,
    pageSize = 15,
    showEmptyMessage = true,
    items,
    columns,
    renderItem,
    onPageChange,
    activePage,
    className,
}) {
    const history = useHistory()
    const t = useTrans()
    const params = useQueryParams()

    if (loading) {
        return (
            <div className={css(styles.space)}>
                <Loader large center />
            </div>
        )
    }

    if (isEmpty(items) && showEmptyMessage) {
        return (
            <div className={cn('is-size-3 has-text-centered has-text-grey', css(styles.space))}>
                {t('empty')}
            </div>
        )
    }

    return (
        <div>
            <table className={cn('table is-fullwidth', className)}>
                <tbody>
                    {columns ? (
                        <tr>
                            {Object.entries(columns).map(([key, value]) => (
                                <th key={key}>{value}</th>
                            ))}
                        </tr>
                    ) : null}

                    {items.map(renderItem)}
                </tbody>
            </table>

            <Pagination
                page={activePage || params.page}
                onSelect={(page) => {
                    if (typeof onPageChange === 'function') {
                        onPageChange(page)
                        return
                    }
                    history.push(`?${queryString.stringify({ ...params, page })}`)
                }}
                count={totalCount}
                pageSize={pageSize} />
        </div>
    )
}

const styles = StyleSheet.create({
    space: {
        marginTop: '2rem',
    },
})
