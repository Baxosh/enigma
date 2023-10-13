import { useContext } from 'react'
// eslint-disable-next-line import/no-cycle
import { Context } from '../components/common/BaseContext'
import { randomString } from '../utils/string'

export function useMessage() {
    const { messages, setMessages } = useContext(Context)

    return [
        (content, className) => {
            setMessages([{ id: randomString(), content, className }, ...messages])
        },
        () => {
            // setText(null)
            // setClassName('')
        },
    ]
}
