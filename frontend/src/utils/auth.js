import isEmpty from 'lodash/isEmpty'

export function getToken() {
    return localStorage.token
}

export function auth() {
    if (isEmpty(getToken())) {
        return {}
    }

    return {
        headers: {
            Authorization: `Token ${getToken()}`,
        },
    }
}

let permissions

export function checkPermission(permission) {
    if (!permissions) {
        permissions = JSON.parse(localStorage.getItem('permissions'))
    }

    return permissions.includes(permission)
}

export function clearPermissions() {
    permissions = undefined
}

function redirectPage() {
    return '/home'
}

export function signin({ user, token, permissions: userPermissions }, history) {
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('token', token)
    localStorage.setItem('permissions', JSON.stringify(userPermissions))
    history.push(redirectPage)
}

export function signOut(history) {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    localStorage.removeItem('permissions')
    clearPermissions()
    history.push('/')
}

export function isAuthenticated() {
    return localStorage.getItem('user')
        && localStorage.getItem('token')
        && localStorage.getItem('permissions')
}
