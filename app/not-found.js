import React from 'react'
import Image from 'next/image'

const notFound = () => {
  return (
    <>
    <div className='flex flex-col items-center justify-center h-screen text-3xl'>
    <div>Well this is awkward.</div>
    <div>It usually doesn't happen.</div>
    <div>But private, we have a 404 situation here.</div>
    <Image src="\Assets\icons\llama-404-notfound.svg"
    width={35}
    height={35}
    alt='Picture of the author'/>
    <div>The promised grasslands were not found.</div>
    <p className='mt-36 text-xs'>kindly try again after some time</p>
    </div>
    </>
  )
}

export default notFound