import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'

type Props = {}

const Buyout = (props: Props) => {
    const navigate = useNavigate()
    useEffect(()=>{
        setTimeout(()=>{navigate('/')},2000)
    },[])
  return (
    <div className='container bg-blue flex flex-col items-center justify-center'>
        <h1 className='text-2xl mt-10 mb-6'>Thank you. Redirecting to homepage</h1>
    </div>
  )
}

export default Buyout