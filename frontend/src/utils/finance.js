const currencies = {
    sum: 'Сум',
    dollar: '$',
}

export function currency(name) {
    return currencies[name] || name
}

export const transactionTypes = {
    bank: { name: 'Банк', icon: 'ion-md-business' },
    cash: { name: 'Наличные', icon: 'ion-md-cash' },
    card: { name: 'Карта', icon: 'ion-md-card' },
}

export const transactionTypeOptions = [
    { name: 'Банк', id: 'bank' },
    { name: 'Наличные', id: 'cash' },
    { name: 'Карта', id: 'card' },
]
