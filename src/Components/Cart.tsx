import React from 'react'
import { cartHandler } from '../Context/Context'
import { Link, useNavigate } from 'react-router'

type Props = {
    handleCart:()=>void
}

const Cart = (props: Props) => {
   const {cartitems}= cartHandler()
  return (
    <div onClick={props.handleCart} className='fixed bg-black/50 overflow-y-auto h-full w-full z-50 mt-[60px] transition-all duration-300 ease-in-out'>
        <div className='relative top-0 right-0 h-full w-full md:w-[500px] bg-white shadow-xl ml-auto flex flex-col items-center py-10 px-0 gap-5'>
            <h1 className='text-2xl'>HandyStore</h1>
            <div className='flex flex-col w-full p-5'>
                {cartitems.map((item,index)=>
                <div key={index} className='w-full border-1 flex items-center gap-4 p-4 '>
                    <img className='h-24 w-24' src={item.image_url}></img>
                    <div className='flex flex-col'>
                        <div>{item.name}</div>
                        <div>{item.category}</div>
                        <div>{item.color}</div>
                        <div>{item.storage}</div>
                        <div>{item.price}</div>
                    </div>

                </div>)}
                
            </div>
            <Link to='/checkout' >Proceed to Checkout</Link>
        </div>
    </div>
  )
}

export default Cart