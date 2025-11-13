import { createContext, useContext, useState } from "react";
import type { AccessoriesType, CartItem, ProductType } from "../Types";



type CartContext = {
    cartitems: CartItem[],
    updateCart: (newCartItems:CartItem)=>void
}

export const CartContext = createContext<CartContext>({
    cartitems:[],
    updateCart:()=>{}
})

export const CartContextProvider=({children}:{children:React.ReactNode})=>{
    const [cartitems,setCartItems] = useState<CartItem[]>([])

    const updateCart = (newCartItems:CartItem)=>{
        setCartItems(prev=>[...prev,newCartItems])
    }

    return(
        <CartContext.Provider value={{cartitems,updateCart}}>
            {children}
        </CartContext.Provider>
    )
} 

export const cartHandler = ()=>{
    return useContext(CartContext)
}