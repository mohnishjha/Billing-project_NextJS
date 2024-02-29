"use client"

import React from 'react'
import EmptyInvoice from './Components/EmptyInvoice';
import Navbar from './Components/Navbar';
import { MainContext } from './Context/MainFormDataContext';
import { useContext } from 'react';
import InvoiceList from './Components/InvoiceList';
import PendingStatus from './Components/PendingStatus';
import PaidStatus from './Components/PaidStatus';
import DraftStatus from './Components/DraftStatus'



const page = () => {


  const contextHere = useContext(MainContext)


  return (
    <div className='bg-[#FFFFF] h-screen'>
      <Navbar/>
      
      {contextHere.form.length == 0 ? <EmptyInvoice/> : <InvoiceList/>}
    </div>
  )
}

export default page