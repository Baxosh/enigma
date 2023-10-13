import React from 'react'
import range from 'lodash/range'
import cn from 'classnames'

export default function Pagination({ page = 1, count, pageSize = 15, onSelect }) {
    const current = parseInt(page, 10)
    const pagesNumber = Math.ceil(count / pageSize)

    if (count <= pageSize || count === undefined) {
        return null
    }

    return (
        <nav className="pagination columns is-mobile is-centered">
            {current - 1 > 0 ? (
                <span
                    onClick={() => onSelect(current - 1)}
                    className="pagination-previous is-narrow column is-mobile pointer">
                    &larr;&nbsp; Предыдущая
                </span>
            ) : null}

            {current < pagesNumber ? (
                <span onClick={() => onSelect(current + 1)} className="pagination-next is-narrow column pointer">
                    Следующая &nbsp;&rarr;
                </span>
            ) : null}

            <ul className="pagination-list">
                {range(1, pagesNumber + 1).map((i) => (
                    <li key={i} onClick={() => onSelect(i)} className="pointer">
                        <span className={cn('pagination-link', { 'is-current': current === i })}>
                            {i}
                        </span>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
