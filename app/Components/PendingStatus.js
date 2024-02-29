import React from 'react'
import Image from 'next/image'

const PendingStatus = () => {
  return (
    <div>
        <div className="rounded-md flex items-center"
          style={{
            width: "104px",
            height: "40px",
            backgroundColor: "rgba(255, 143, 0, 0.0571)",
          }}
        >
          <Image
            src="./Assets/icons/pendingStatus.svg"
            alt="logo"
            width={8}
            height={8}
            className="ml-4 mr-2"
          />
          <span
            className="text-xs font-bold text-[#ff8f00]">
            Pending
          </span>
        </div>
      </div>
  )
}

export default PendingStatus