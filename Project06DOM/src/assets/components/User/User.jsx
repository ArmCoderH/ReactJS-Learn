import React from 'react'
import {useParams} from 'react-router-dom'

function User() {
    const{userid} = useParams()
  return (
    <div className='bg-neutral-600 text-cyan-500 p-10' >
      User: {userid}
    </div>
  )
}

export default User
