export function maxLength(value, max) {
    if (value.length > max) {
        return `${value.slice(0, max)} ...`
    }
    return value
}

export function multiReplace(text, obj) {
    let value = text
    // eslint-disable-next-line no-restricted-syntax,guard-for-in
    for (const x in obj) {
        value = value.replace(new RegExp(x, 'g'), obj[x])
    }
    return value
}

export function randomString() {
    return (Math.random() + 1).toString(36).substring(2)
}
