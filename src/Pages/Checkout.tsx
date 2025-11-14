import React from 'react'
import { cartHandler } from '../Context/Context'
import { useNavigate } from 'react-router'

type Props = {}

const Checkout = (props: Props) => {
    const {cartitems} = cartHandler()
    const navigate = useNavigate()
  return (
    <div className='container bg-blue flex flex-col items-center justify-center'>
        <h1 className='text-2xl mt-10 mb-6'>Products</h1>
        <div className='w-full gap-2'>
            {cartitems.map(item=>
            <div className='flex items-center'>
                <img className='h-44 w-72' src={item.image_url}/>
                <div>
                    <div className='text-2xl'>{item.name}</div>
                    <div className='text-gray-400 min-h-24 lg:min-h-16'>{item.price}</div>
                </div>           
            </div>)}
        </div>
       <button className='border-2 rounded-2xl text-sm lg:text-xl p-1 lg:p-3' onClick={()=>navigate('/buyout')}>Checkout</button>
    </div>
  )
}

export default Checkout