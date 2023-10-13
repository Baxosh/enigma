import React, { useEffect } from 'react'
import { Field, useFormikContext } from 'formik'
import cn from 'classnames'
import isEmpty from 'lodash/isEmpty'
import ValidationErrorMessage from './ValidationErrorMessage'
import useTrans from '../../hooks/trans'

export default function Select({
    name,
    className,
    label,
    validate,
    options = [],
    optionValue = 'id',
    optionLabel = 'name',
    loading = false,
    disabled = false,
    empty = false,
    optional = false,
    help,
    ...attributes
}) {
    const { setFieldValue, values, errors, touched } = useFormikContext()
    const value = values[name]
    const error = errors[name]
    const touch = touched[name]
    const t = useTrans()

    useEffect(() => {
        // Cast type to string if it is number.
        // Because isEmpty function returns true if you pass any number
        const strValue = typeof value === 'number' ? String(value) : value
        if (!empty && isEmpty(strValue) && !isEmpty(options)) {
            setFieldValue(name, options[0][optionValue])
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [options])

    return (
        <div className="field">
            <div className="control">
                {label ? (
                    <label htmlFor={name}>
                        {label} &nbsp;
                        {optional ? <span className="form-hint">не обязательно</span> : null}
                    </label>
                ) : null}

                <div className={cn('select is-fullwidth', className, { 'is-loading': loading })}>
                    <Field
                        name={name}
                        id={name}
                        component="select"
                        validate={validate}
                        disabled={disabled || loading}
                        {...attributes}>

                        {empty ? <option value="">{t('notSelected')}</option> : null}

                        {options.map((item) => (
                            <option value={item[optionValue]} key={item[optionValue]}>
                                {typeof optionLabel === 'function' ? optionLabel(item) : item[optionLabel]}
                            </option>
                        ))}
                    </Field>
                </div>

                <ValidationErrorMessage name={name} />
            </div>

            {help && (!error || !touch) ? (
                <p className="form-hint">{help}</p>
            ) : null}
        </div>
    )
}
