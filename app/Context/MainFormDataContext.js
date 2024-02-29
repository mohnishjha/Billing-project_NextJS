'use client'

import { createContext, useState } from "react";

export const MainContext = createContext(null)

export const MainDataFunc = (props) => {

    const [form, setForm] = useState([])
    const [invoiceID, setInvoiceID] = useState("#XMP1")
    const [status, setStatus] = useState("Pending")

    return (
        <MainContext.Provider value={{form, setForm, invoiceID, setInvoiceID, status, setStatus}}>
            {props.children}
        </MainContext.Provider>
    )
}