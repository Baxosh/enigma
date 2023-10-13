import React from 'react'
import { ErrorMessage } from 'formik'
import useTrans from '../../hooks/trans'

export default function ValidationErrorMessage({ name, ...attributes }) {
    const t = useTrans()

    return (
        <ErrorMessage
            name={name}
            {...attributes}
            render={(msg) => <div className="has-text-danger">{t(msg)}</div>} />
    )
}
