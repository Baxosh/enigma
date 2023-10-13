import { StyleSheet, css } from 'aphrodite'
import React from 'react'
import cn from 'classnames'

export default function Button({
    text, onClick, loading, className, icon, disabled = false, type = 'button', ...rest
}) {
    return (
        <button
            onClick={onClick}
            type={type}
            disabled={disabled}
            className={cn('button', className, { 'is-loading': loading })}
            {...rest}>

            {icon ? <i className={cn('icon', text ? css(styles.icon) : '', icon)} /> : null }
            {text}
        </button>
    )
}

const styles = StyleSheet.create({
    icon: {
        marginRight: '0.2rem',
    },
})
