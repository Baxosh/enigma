import cn from 'classnames'
import React, { useEffect, useState } from 'react'
import { css, StyleSheet } from 'aphrodite'

export default function Message({ item, index, closeMessage, delay = 20 }) {
    const [hiding, setHiding] = useState(false)
    let top = 60

    useEffect(() => {
        const hidingTimeout = setTimeout(() => setHiding(true), delay * 1000)
        const hideTimeout = setTimeout(() => closeMessage(item.id), (delay + 1) * 1000)

        return () => {
            clearTimeout(hidingTimeout)
            clearTimeout(hideTimeout)
        }
    }, [closeMessage, delay, item.id])

    if (index === 1) {
        top = 130
    }

    if (index > 1) {
        top = index * 70 + 60
    }

    return (
        <article
            className={cn('message', item.className, css(styles.message), { [css(styles.hide)]: hiding })}
            style={{ top }}>
            <div className="message-body">
                <span>{item.content}</span> &nbsp; &nbsp;
                <button className="delete is-pulled-right" onClick={() => closeMessage(item.id)} />
            </div>
        </article>
    )
}

const styles = StyleSheet.create({
    message: {
        position: 'fixed',
        minWidth: '20rem',
        right: '50px',
        animationName: {
            from: { opacity: 0 },
            to: { opacity: 1 },
        },
        animationDuration: '1s',
        zIndex: 1000,
    },
    hide: {
        animationName: {
            from: { opacity: 1 },
            to: { opacity: 0 },
        },
        animationDuration: '1s',
    },
})
