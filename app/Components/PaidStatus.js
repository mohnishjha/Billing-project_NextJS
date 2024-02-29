import React from 'react'

const PaidStatus = () => {
  return (
    <div>
        <div className="rounded-md flex items-center bg-[#33d6a00f] h-[40px] w-[104px]"
        >
          <div className='h-2 w-2 bg-[#33D69F] rounded-full ml-7 mr-2'></div>
          <span
            className="text-xs font-bold text-[#33D69F]">
            Paid
          </span>
        </div>
      </div>
  )
}

export default PaidStatus