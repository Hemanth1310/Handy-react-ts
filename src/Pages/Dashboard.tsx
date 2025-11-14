import React, { useState } from 'react'
import {data} from '../data/data'
import type { Accessories, CartItem, Product,ProductVariants } from '../Types'
import { cartHandler } from '../Context/Context'

type Props = {
    handleCart:()=>void
}

const Dashboard = (props:Props) => {
    console.log(data)
    const Products  = data.products as Product[]
    const Accessories = data.accessories as Accessories[]
    const {updateCart} = cartHandler();

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
        props.handleCart()
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
                        <div className=''>
                            <button onClick={()=>buyProduct(product,variant)} disabled={!variant.inStock} className={`border-2 box-border rounded-2xl px-3 py-1 mt-3 ${!variant.inStock ? 'border-gray-400 text-gray-400 cursor-not-allowed':'hover:text-white hover:bg-gray-900'}`}>{variant.name}</button>
                            {!variant.inStock && <p className='absolute font-light text-xs text-gray-500'>Variant not in Stock</p>}
                        </div>
                        )}

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