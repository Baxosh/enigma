import find from 'lodash/find'

export const memberRoles = [
    { value: 'developer', label: 'Разработчик' },
    { value: 'manager', label: 'Менеджер' },
]

export function getRole(name) {
    return find(memberRoles, { value: name })
}
