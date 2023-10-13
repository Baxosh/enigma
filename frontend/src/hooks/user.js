import { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { Context } from '../components/common/BaseContext'

export function useUser() {
    const context = useContext(Context)
    return [context.user, context.setUser]
}

export function useSignIn() {
    const history = useLocation()
    const [, setUser] = useUser(Context)

    return ({ user, token, permissions: userPermissions }) => {
        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('token', token)
        localStorage.setItem('permissions', JSON.stringify(userPermissions))
        setUser(user)
        history.push('/')
    }
}

export function useSignOut() {
    const history = useLocation()
    const [, setUser] = useUser(Context)

    return () => {
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        localStorage.removeItem('permissions')
        setUser(null)
        history.push('/')
    }
}
