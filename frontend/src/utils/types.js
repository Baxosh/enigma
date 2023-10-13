import find from 'lodash/find'

export const types = [{ value: 'outcome', label: 'Расход' }, { value: 'income', label: 'Приход' }]

export const taskStatuses = [
    { id: 'todo', title: 'Запланировано', color: '#ffdd57' },
    { id: 'doing', title: 'Выполняется', color: '#3298dc' },
    { id: 'done', title: 'Сделано', color: '#48c774' },
]

export const skillTypes = [
    { id: 'language', name: 'Язык' },
    { id: 'framework', name: 'Фреймворк' },
    { id: 'library', name: 'Библиотеки' },
]

export function skillTypesCheck(status) {
    return find(skillTypes, { id: status }).name
}
