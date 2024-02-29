'use client'

import React from 'react'
import Invoice from './Invoice'
import { MainContext } from '../Context/MainFormDataContext'
import { useContext } from 'react'
import Link from 'next/link'

const InvoiceList = () => {

    const contextHere = useContext(MainContext)

  return (
    <div>
        <Invoice/>

        {contextHere.form.map((element) => {
            return (
                <Link href='/viewInvoice' key={element.invoiceNumber}>
                <button className='bg-white mt-6 pt-6 h-32 w-80 flex justify-around ml-6 mr-6 rounded-md shadow-slate-200 shadow-md' 
                key={element.tName}>
                    <div>
                    <p className='font-semibold text-sm mb-4'>{element.invoiceNumber}</p>
                    <div className='text-slate-400 text-sm'>Due {element.tInvoiceDate}</div>
                    <div className='font-semibold'>InvoiceAmount</div>
                    </div>


                    <div>
                        <div className='text-sm text-slate-400 mb-5'>{element.tName}</div>
                        <div>invoicestatus</div>
                    </div>

                </button>
                    </Link>
            )
        })}

    </div>
  )
}

export default InvoiceList