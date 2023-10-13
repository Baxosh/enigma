/* eslint-disable no-restricted-syntax */
import { integersOnly } from './number'

/* eslint-disable consistent-return */

function empty(value) {
    return value === '' || value === null || value === undefined || value.length === 0
}

export function required(value) {
    if (empty(value)) {
        return 'required'
    }
}

export function tableRequired(value) {
    if (empty(value)) {
        return 'is-danger'
    }
}

export function maxNumber(limit) {
    return (value) => {
        if (value > limit) {
            return 'maxNumber'
        }
    }
}

export function minNumber(limit) {
    return (value) => {
        if (value < limit) {
            return 'minNumber'
        }
    }
}

export function minTime(startTime) {
    return (endTime) => {
        const valueStartTime = new Date(`2018.01.01 ${startTime}`).getTime()
        const valueEndTime = new Date(`2018.01.01 ${endTime}`).getTime()
        if (valueStartTime > valueEndTime) {
            return 'Урок не может закончиться прежде чем начаться.'
        }
    }
}

export function email(value) {
    if (!value) return
    const regx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (empty(value)) {
        return
    }

    if (!regx.test(value)) {
        return 'Неправильный email-адрес'
    }
}

export function phone(value) {
    if (!value) return
    const integers = integersOnly(value)

    if (integers.length !== 12) {
        return 'Номер телефона должен состоять из 12 цифр'
    }
}

export function card(value) {
    if (!value) return
    const integers = integersOnly(value)

    if (integers.length !== 16) {
        return 'Номер пластиковой карты должен состоять из 16 цифр'
    }
}

function isNumber(value) {
    return /^-?\d*(\.\d+)?$/.test(value)
}

export function number(value) {
    if (!isNumber(value)) {
        return 'This field should be number'
    }
}

export function max(size) {
    return (value) => {
        if (isNumber(value) && parseFloat(value) > size) {
            return `This field should be less then "${size}"`
        }
    }
}

export function min(size) {
    return (value) => {
        if (isNumber(value) && parseFloat(value) < size) {
            return `This field should be greater then "${size}"`
        }
    }
}

export function maxLength(size) {
    return (value) => {
        if (value.length > size) {
            return `This field should contain less then "${size}" chars.`
        }
    }
}

export function minLength(size) {
    return (value) => {
        if (value.length < size) {
            return `This field should contain more then "${size}" chars.`
        }
    }
}

export function validator(...validators) {
    return (value) => {
        for (const fn of validators) {
            const message = fn(value)
            if (message) return message
        }
    }
}

export function validateForm(rules) {
    return (data) => {
        const errors = {}
        for (const key of Object.keys(rules)) {
            const message = rules[key](data[key])
            if (message) {
                errors[key] = message
            }
        }
        return errors
    }
}
