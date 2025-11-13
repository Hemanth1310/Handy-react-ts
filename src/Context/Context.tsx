import { createContext } from "react";

type CartItem = string

type CartContext = {
    cartitems: CartItem[],
    updateCart: (newCartItems:CartItem[])=>void
}

const cartContext = createContext<CartContext>({
    cartitems:[],
    updateCart:()=>{}
})