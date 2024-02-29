import React from 'react'
import { notFound } from 'next/navigation'

const page = ({params}) => {

  if(params.reviewId > 1000 || params.productId > 1000){
    notFound()
  }

  return (
    <div>This is product: {params.productId}, review number: {params.reviewId} </div>
  )
}

export default page