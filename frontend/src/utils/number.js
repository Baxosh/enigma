export function format(number) {
    return (typeof number === 'number') ? number.toLocaleString('fr') : number
}

export function integersOnly(value) {
    return String(value).replace(/[^0-9]/gim, '')
}

export function normalizePhone(value) {
    if (!value) return null

    const phone = value.replace(/[^\d]/g, '')
    if (phone.length === 12) {
        return phone.replace(/(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/, '+$1 ($2) $3-$4-$5')
    }

    return null
}

export function normalizeCard(value) {
    if (!value) return null

    const card = value.replace(/[^\d]/g, '')
    if (card.length === 16) {
        return card.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, '$1 $2 $3 $4')
    }

    return null
}
