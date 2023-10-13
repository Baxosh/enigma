import React from 'react'
import { NavLink } from 'react-router-dom'
import cn from 'classnames'

export default function LinkButton({ to, className, icon, text, ...attributes }) {
    return (
        <NavLink {...attributes} to={to} className={cn('button', className)}>
            { icon ? <i className={cn('icon', icon)} /> : null} &nbsp;
            {text}
        </NavLink>
    )
}
