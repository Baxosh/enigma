import { useContext } from 'react'

import { languages } from '../translate'
import { LanguageContext } from '../contexts/LanguageContext'

export default function useTrans() {
    const { lang } = useContext(LanguageContext) || {}
    return (text) => languages[lang][text] || text
}
