import React, { createContext, useRef, useState } from 'react'
import { StyleSheet, css } from 'aphrodite'
import cn from 'classnames'
import Modal from './Modal'
import Message from './Message'
// eslint-disable-next-line import/no-cycle
import supportIcon from '../../static/technical-support.png'
import useTrans from '../../hooks/trans'

export const Context = createContext()

export default function BaseContextWrapper({ children }) {
    const [messages, setMessages] = useState([])
    const [modalComponent, setModalComponent] = useState({})
    const [user, setUser] = useState(localStorage.user ? JSON.parse(localStorage.user) : null)
    const spanRef = useRef([])
    const [reports] = useState([])
    const [support, setSupport] = useState('hide')
    const t = useTrans()
    const contacts = [
        '+998936868899',
        'https://t.me/+BH6pi8Zg8bRjZTcy',
    ]

    function copyToClipboard(text, i) {
        navigator.clipboard.writeText(text)
        spanRef.current[i].classList.remove('is-hidden')

        const temp = setInterval(() => {
            spanRef.current[i].classList.add('is-hidden')
            clearInterval(temp)
        }, 600)
    }

    function closeMessage(id) {
        setMessages(messages.filter((i) => i.id !== id))
    }

    return (
        <Context.Provider
            value={{ messages, setMessages, setModalComponent, user, setUser, reports }}>
            {children}

            {/* {user && roleMain.includes(user.role) ? ( */}
            {/*    <ParseMessage */}
            {/*        messages={messages} */}
            {/*        setMessages={setMessages} */}
            {/*        reports={reports} */}
            {/*        setReports={setReports} /> */}
            {/* ) : null} */}

            {messages.map((item, index) => (
                <Message
                    key={item.id}
                    item={item}
                    index={index}
                    closeMessage={closeMessage} />
            ))}

            {modalComponent && modalComponent.content ? (
                <Modal
                    isActive
                    onClose={() => {
                        if (typeof modalComponent.onClose === 'function') {
                            modalComponent.onClose()
                        }
                        setModalComponent(null)
                    }}>
                    {modalComponent.content}
                </Modal>
            ) : null}

            <div className={css(styles.support, styles[support])}>
                {support === 'show' ? (
                    <div>
                        {contacts.map((contact, i) => (
                            <h1
                                onClick={() => copyToClipboard(contact, i)}
                                key={contact}
                                className={cn('is-relative', css(styles.support_number))}>
                                {contact}
                                <span
                                    ref={(element) => { spanRef.current[i] = element }}
                                    className={cn('done tag is-link has-text-white is-hidden', css(styles.done))}
                                    aria-hidden="true">
                                    {t('copied')}
                                </span>
                            </h1>
                        ))}
                    </div>
                ) : null}
                <img
                    onClick={() => setSupport((prev) => (prev === 'hide' ? 'show' : 'hide'))}
                    onMouseEnter={() => setSupport('show')}
                    className={css(styles.support_img)}
                    src={supportIcon}
                    alt="Technical support " />
            </div>
        </Context.Provider>
    )
}
const rotateKeyFrames = {
    '0%': {
        transform: 'rotate(0)',
    },

    '50%': {
        transform: 'rotate(-10deg)',
    },

    '100%': {
        transform: 'rotate(0)',
    },
}

const translateKeyframes = {
    '0%': {
        transform: 'translateX(0px)',
    },

    '100%': {
        transform: 'translateX(-100px)',
    },
}

const showCopied = {
    '0%': {
        transform: 'translateY(0px)',
    },

    '100%': {
        transform: 'translateY(-10px)',
    },
}

const styles = StyleSheet.create({
    support: {
        position: 'fixed',
        bottom: '8%',
        right: '-4%',
        zIndex: 9999,
        display: 'flex',
        justifyContent: 'space-between',
        '@media (max-width: 768px)': {
            right: '-8%',
        },
    },
    support_number: {
        width: 'fit-content',
        margin: '5px 0',
        padding: '2px 5px',
        borderRadius: '5px',
        fontWeight: 'bold',
        background: '#e3e3e3',
        cursor: 'pointer',
    },
    support_img: {
        width: '100px',
        height: '100px',
        cursor: 'pointer',
        opacity: 0.8,
        transition: 'right .5s ease-in-out',
        ':hover': {
            opacity: 1,
        },
    },
    hide: {
        animationName: [rotateKeyFrames],
        animationDuration: '3s, 1200ms',
        animationIterationCount: 'infinite',
    },
    show: {
        width: '350px',
        animationName: [translateKeyframes],
        animationDuration: '1s, 1200ms',
        animationIterationCount: '1',
        animationFillMode: 'forwards',
    },
    done: {
        position: 'absolute',
        top: '-70%',
        left: '40%',
        padding: '5px',
        animationName: [showCopied],
        animationDuration: '1s',
        animationIterationCount: '1',
    },
})
