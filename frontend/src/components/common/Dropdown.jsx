/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import cn from 'classnames'
import { NavLink } from 'react-router-dom'
import { css, StyleSheet } from 'aphrodite'
import Loader from './Loader'

export default function Dropdown({ trigger, children, right, className, fullwidth = false }) {
    const [active, setActive] = useState(false)

    return (
        <div
            onMouseLeave={() => setActive(false)}
            className={cn('dropdown', className, {
                'is-active': active,
                'is-right': right,
                [css(styles.fullwidth)]: fullwidth,
            })}>
            <div
                className={cn('dropdown-trigger', { [css(styles.fullwidth)]: fullwidth })}
                onClick={() => setActive(!active)}>
                {trigger}
            </div>

            {active ? (
                <div className="dropdown-menu">
                    <div className="dropdown-content">{children}</div>
                </div>
            ) : null}
        </div>
    )
}

export function DropdownItem({ text, icon, active, to, onClick, loading = false, ...props }) {
    const Component = to ? NavLink : 'a'

    return (
        <Component {...props} to={to} className={cn('dropdown-item', { 'is-active': active })} onClick={onClick}>
            {icon && !loading ? <span className={cn('icon', icon)} /> : null}
            {loading ? <Loader inline /> : null} &nbsp;
            {text}
        </Component>
    )
}

const styles = StyleSheet.create({
    fullwidth: {
        width: '100%',
    },
})
