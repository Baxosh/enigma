import React, { createContext, useState } from 'react'
import { useStream } from '../hooks/request'
import { DISTRICT_REPORT_STATUS_LIST } from '../urls'

export const StreamContext = createContext()

export function StreamProvider({ children }) {
    const [districts, setDistricts] = useState()
    useStream(DISTRICT_REPORT_STATUS_LIST, (data) => setDistricts(data))

    return (
        <StreamContext.Provider value={{ districts, setDistricts }}>
            {children}
        </StreamContext.Provider>
    )
}
