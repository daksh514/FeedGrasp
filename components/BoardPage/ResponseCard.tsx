import React from 'react'

function ResponseCard({responseStr}:{responseStr:string}) {
    const response = JSON.parse(responseStr)
  return (
    <div>
        <h1>{response.title}</h1>
        <h1>{response.title}</h1>
    </div>
  )
}

export default ResponseCard