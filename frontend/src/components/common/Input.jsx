import React from 'react'
import cn from 'classnames'
import { Field, useFormikContext } from 'formik'
import ValidationErrorMessage from './ValidationErrorMessage'

export default function Input({
    name,
    className,
    type,
    label,
    validate,
    component = 'input',
    optional = false,
    help,
    icon,
    loading,
    large = false,
    ...attributes
}) {
    const { errors, touched } = useFormikContext()

    return (
        <div className="field">
            <div className={cn('control', { 'has-icons-left': icon, 'is-loading': loading, 'is-large': large })}>
                {label ? (
                    <label htmlFor={name}>
                        {label} &nbsp;
                        {optional ? <span className="form-hint">не обязательно</span> : null}
                    </label>
                ) : null}

                <Field
                    className={cn(component, className)}
                    type={type || 'text'}
                    name={name}
                    id={name}
                    component={component}
                    validate={validate}
                    {...attributes} />

                {icon ? (
                    <span className="icon is-left">
                        <i className={icon}> </i>
                    </span>
                ) : null}

                <ValidationErrorMessage name={name} />
            </div>

            {help && (!errors[name] || !touched[name]) ? (
                <p className="form-hint">{help}</p>
            ) : null}
        </div>
    )
}
