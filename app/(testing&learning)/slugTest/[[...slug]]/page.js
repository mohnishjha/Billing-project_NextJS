import React from 'react'

const test = ({params}) => {

  if(params.slug?.length == 4){
    return <h1>You are at: {params.slug[params.slug?.length -1]}</h1>
  } else if(params.slug?.length == 3){
    return <h1>Now you are at: {params.slug[0]} and we wil also show u <strong>{params.slug[1]}</strong></h1>
  }

  return (
    <div>kaka {params.slug?.length}</div>
  )
}

export default test