import React from 'react'

export default async function Info({params}:{ params:
    Promise<{id:string}>
}) {

const {id} = await params

  return (
    <>
        <div>Search-ID</div>
        <hr />
        <div>id = {id}</div>
    </>
    
  )
}
