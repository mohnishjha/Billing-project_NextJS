import React from 'react'

const DraftStatus = () => {
  return (
    <div>
        <div className="rounded-md flex items-center bg-[#97979723] w-[104px] h-[40px]">
          <div className='h-2 w-2 bg-black rounded-full ml-7 mr-2'></div>
          <span
            className="text-xs font-bold text-black">
            Draft
          </span>
        </div>
      </div>
  )
}

export default DraftStatus