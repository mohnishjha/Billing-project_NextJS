import React from 'react'

// export const metadata = {
//   title: "about pagejs wala metadata",
//   description: "experimental metadata"
// }

const page = ({params}) => {
  return (
    <div>This is product {params.productId}. And you are still you</div>
  )
}

export default page