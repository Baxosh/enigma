import cn from 'classnames'
import React, { useState, Fragment } from 'react'
import { css, StyleSheet } from 'aphrodite'
import Input from './Input'
import { required, phone, validator } from '../../utils/validators'

export default function Phone() {
    const [showPhone, setShowPhone] = useState(false)

    return (
        <Fragment>
            <div className={cn('control has-icons-right')}>
                <Input
                    name="phone"
                    type="phone"
                    validate={validator(phone, required)}
                    label="Номер телефона" />

                {!showPhone
                    ? (
                        <span className={
                            cn('icon is-right has-text-centered',
                                css(styles.phone),
                                { [css(styles.label)]: 'Номер телефона' })
                        } onClick={() => setShowPhone(true)}>
                            <i
                                className="ion-md-add has-text-success"
                            />
                        </span>
                    )
                    : null}
            </div>

            {showPhone
                ? (
                    <div className={cn('control has-icons-right')}>
                        <Input
                            name="phoneSecond"
                            type="phone"
                            validate={validator(phone)}
                            label="Номер телефона (дополнительно)" />

                        <span className={
                            cn('icon is-right has-text-centered',
                                css(styles.phone),
                                { [css(styles.label)]: 'Номер телефона' })
                        } onClick={() => setShowPhone(false)}>
                            <i
                                className="ion-md-close has-text-danger"
                            />
                        </span>
                    </div>
                )
                : null}
        </Fragment>
    )
}

const styles = StyleSheet.create({
    phone: {
        pointerEvents: 'auto',
        color: 'black',
        cursor: 'pointer',
    },
    label: {
        marginTop: '25px',
        marginRight: '1px',
        border: '1px solid #b9b9b9',
        ':hover': {
            borderColor: '#858484',
        },
    },
})
