export const positions = {
    admin: 'Админ / директор',
    accountant: 'Бухгалтер',
    marketing: 'Маркетолог',
    team_lead: 'Лидер команды',
    developer: 'Программист',
    hr: 'HR менеджер',
    seller: 'Продавец',
    lawyer: 'Юрист',
    supply: 'Снабженец',
    quality: 'Контроль качества',
    qualification: 'Квалификация',
    cleaner: 'Уборщик',
}

export const classes = {
    admin: 'is-success',
    accountant: 'is-danger',
    marketing: 'is-primary',
    team_lead: 'is-warning',
    developer: 'is-info',
    hr: 'is-link',
    seller: 'is-success is-light',
    lawyer: 'is-danger is-light',
    supply: 'is-primary is-light',
    quality: 'is-warning is-light',
    qualification: 'is-info is-light',
}

// eslint-disable-next-line consistent-return
export function getTypeSeason(type) {
    if (type === 'vegetation') {
        return 'vegetation'
    }
    if (type === 'no_vegetation') {
        return 'noVegetation'
    }
}

export const types = [
    { value: 'vegetation', title: 'vegetation' },
    { value: 'no_vegetation', title: 'noVegetation' },
]

export function position(name) {
    return positions[name]
}

export function positionClass(name) {
    return classes[name]
}

export const channelLevels = [
    { id: 'ordinary', name: 'Канал' },
    { id: 'main', name: 'БУИС' },
    { id: 'branch', name: 'Дочерния система' },
]
