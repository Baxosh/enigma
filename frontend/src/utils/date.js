import moment from 'moment'
import filter from 'lodash/filter'

export const DATE_FORMAT = 'YYYY-MM-DD'
export const DATETIME_FORMAT = 'YYYY.MM.DD HH:mm'

export const DAYS = [
    { key: 1, title: 'Понедельник', shortTitle: 'Пн' },
    { key: 2, title: 'Вторник', shortTitle: 'Вт' },
    { key: 3, title: 'Среда', shortTitle: 'Ср' },
    { key: 4, title: 'Четверг', shortTitle: 'Чт' },
    { key: 5, title: 'Пятница', shortTitle: 'Пт' },
    { key: 6, title: 'Суббота', shortTitle: 'Сб' },
    { key: 7, title: 'Воскресенье', shortTitle: 'Вс' },
]

export function day(dayKey) {
    return filter(DAYS, { key: dayKey })[0]
}

export function getMonth(date = new Date(), withYear = false) {
    const format = withYear ? 'MMMM YYYY' : 'MMMM'
    const month = moment(date).format(format)
    return (month)[0].toUpperCase() + (month).slice(1)
}

export function getDateTime(date = new Date()) {
    return moment(date).format(DATETIME_FORMAT)
}

export function getReportDays(date = new Date()) {
    const today = moment(date).format(DATE_FORMAT)
    const yesterday = moment(date).subtract(1, 'day').format(DATE_FORMAT)
    const lastYear = moment(date).subtract(1, 'year').format(DATE_FORMAT)

    return { today, yesterday, lastYear }
}

export const TODAY = moment().format(DATE_FORMAT)
