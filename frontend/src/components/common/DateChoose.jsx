import React from 'react'
import cn from 'classnames'
import moment from 'moment'
import { DATE_FORMAT } from '../../utils/date'

export default function DateChoose({ date, onDatesChange }) {
    function onChange({ target }) {
        onDatesChange({
            date: moment(target.name === 'date' ? target.value : date).format(DATE_FORMAT),
        })
    }

    return (
        <div className={cn('columns is-mobile')}>
            <div className="column">
                <input
                    name="date"
                    type="date"
                    value={date}
                    className="input"
                    onChange={onChange} />
            </div>
        </div>
    )
}
