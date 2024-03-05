import Image from 'next/image'
import React from 'react'

const LoadingComponent = () => {
    return (
    <div className="h-screen w-screen flex flex-col justify-center items-center pt-64 pb-0 animate-bounce">
        <Image
        src='/Assets/icons/loadingSpinner.svg'
        width={200}
        height={200}
        alt='Loading...'
        className='animate-spin'
        priority
        />
    </div>
  )
}

export default LoadingComponent