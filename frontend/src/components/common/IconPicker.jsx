/* eslint-disable jsx-a11y/anchor-is-valid */
import cn from 'classnames'
import { Field, useFormikContext } from 'formik'
import React, { useEffect, useState } from 'react'
import { css, StyleSheet } from 'aphrodite'
import { icons } from '../../utils/icons'
import Button from './Button'
import ValidationErrorMessage from './ValidationErrorMessage'

export default function IconPicker({ name, validate, optional = false }) {
    const [value, setValue] = useState('')
    const [showDropdown, setShowDropDown] = useState(false)
    const { setFieldValue, values } = useFormikContext()

    useEffect(() => setValue(values.icon), [values.icon])

    function setIcon(icon) {
        setValue(icon)
        setShowDropDown(false)
        setFieldValue(name, icon)
    }

    return (
        <div className="field">
            <div className="control">
                {optional ? <p className="form-hint">не обязательно</p> : null}

                <Field name={name} validate={validate}>
                    {() => (
                        <div className={cn('dropdown', { 'is-active': showDropdown })}>
                            <div className="dropdown-trigger">
                                <Button
                                    icon={value}
                                    text={value ? 'Выбран' : 'Выберите значок'}
                                    onClick={() => setShowDropDown(!showDropdown)} />
                            </div>

                            <div className="dropdown-menu">
                                <div
                                    className={cn(
                                        'dropdown-content columns is-multiline is-mobile',
                                        css(styles.dropdownContent),
                                    )}>
                                    {icons.map((icon) => (
                                        <a
                                            key={icon}
                                            onClick={() => setIcon(icon)}
                                            className="dropdown-item column is-1">
                                            <i className={cn('ion is-size-4', icon)} />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </Field>

                <ValidationErrorMessage name={name} />
            </div>
        </div>
    )
}

const styles = StyleSheet.create({
    dropdownContent: {
        width: '90vh',
    },
})
