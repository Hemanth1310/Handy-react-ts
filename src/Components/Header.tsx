import React from 'react'
import { useNavigate } from 'react-router'

type Props = {
    handleCart:()=>void
}

const Header = (props: Props) => {
    const navigate=useNavigate()
  return (
     <div className='w-screen h-[60px] bg-gray-950 flex items-center justify-center fixed '>
        <div className='container text-blue-50 text-2xl flex items-center justify-between'>
            <h1 onClick={()=>navigate('/')} className='cursor-pointer'>Handy Store</h1> 
            <div className=' text-blue-50 text-5xl '>
                    <div className='h-full' onClick={props.handleCart}><span className="material-symbols-outlined text-4xl">
                    shopping_cart
                    </span></div>
            </div>  
        </div>
      
        
    </div>
  )
}

export default Header