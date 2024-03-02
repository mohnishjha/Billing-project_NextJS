import React from 'react'
import Image from 'next/image'
import Invoice from './Invoice'

const EmptyInvoice = () => {
  return (
    <>
      <Invoice/>
      <div className="flex flex-col justify-center items-center mt-28">
        <Image
          src="./Assets/icons/emptyInvoiceLogo.svg"
          alt="empty invoice logo"
          height={160}
          width={193} className='w-[193px] h-[160px]'
          priority
        />
        <h1 className="text-xl font-bold mt-10">There is nothing here</h1>
        <h2
          className="text-xs font-medium text-center mt-6 text-[#888eb0]"
        >
          Create an invoice by clicking the <br />{" "}
          <span className="font-bold">New</span> button and get started
        </h2>
      </div>
    </>
    )
}

export default EmptyInvoice