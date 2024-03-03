'use client'

import React from 'react'
import Head from 'next/head'
import { usePathname} from 'next/navigation'

const Page = () => {
  const pathname = usePathname()
  const rouID  = pathname.query 

  return (
    <div>
      <Head>
        <title>what</title>
      </Head>
    </div>
  )
}

export default Page
