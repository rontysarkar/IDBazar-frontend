'use client'
import { useParams } from 'next/navigation'
import React from 'react'

const page:React.FC = () => {

    const {token} = useParams();
    console.log(token)
  return (
    <div>page</div>
  )
}

export default page