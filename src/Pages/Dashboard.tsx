import React, { useState } from 'react'
import {data} from '../data/data'
import type { Accessories, CartItem, Product,ProductVariants } from '../Types'
import { cartHandler } from '../Context/Context'

const Dashboard = () => {
    console.log(data)
    const Products  = data.products as Product[]
    const Accessories = data.accessories as Accessories[]
    const [initBuy,setInitBuy] = useState<boolean>(false)
    const {updateCart} = cartHandler();

    const handleBuyProduct=()=>{
        if(!initBuy){
            setInitBuy(true)
        }else{
            setInitBuy(false)
        }
    }

    const buyProduct=(product:Product,variant:ProductVariants)=>{
        const basicCartItem :CartItem = {
            id:product.id,
            name:product.name,
            category:product.category,
            price:variant.price,
            image_url:product.image_url,
        }
        let newCartItem
        if('storage' in variant){
            newCartItem={...basicCartItem,storage:variant.storage}
        }else{
            newCartItem={...basicCartItem,color:variant.color}
        }

        updateCart(newCartItem)
         setInitBuy(false)
    }

  return (
     <div className='container bg-blue flex flex-col items-center justify-center'>
        <h1 className='text-2xl mt-10 mb-6'>Products</h1>
        <div className='grid grid-cols-4'>
            {Products.map((product,index)=>
                <div className='p-5'  key={index}>
                    <img className='' src={product.image_url}/>
                    <div className='text-2xl'>{product.name}</div>
                    <div className='text-gray-400'>{product.description}</div>
                    <div className='flex gap-4 items-center'>
                        Variants: {product.variants.map(variant=>
                    <button onClick={()=>buyProduct(product,variant)} className='border-2 box-border rounded-2xl px-3 py-1 mt-3 hover:text-white hover:bg-gray-900'>{variant.name}</button>)}
                    </div>
                    
                    
                </div>
            )}
        </div>
        <h1 className='text-2xl mt-10 mb-6'>Accessories</h1>
        <div className='grid grid-cols-4'>
            {Accessories.map((accessory,index)=>
            <div className='p-5' key={index}>
                <img className='h-36' src={accessory.image_url}/>
                <div className='text-2xl'>{accessory.name}</div>
                <div className='text-gray-400'>{accessory.description}</div>
                 <button className='border-2 rounded-2xl px-3 py-1 mt-3 hover:text-white hover:bg-gray-900'>Add to Cart</button>
            </div>)}
            
        </div>
    </div>
  )
}

export default Dashboard