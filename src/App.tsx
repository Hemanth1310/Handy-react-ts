import React,{ useState } from 'react'
import Dashboard from './Pages/Dashboard'
import Header from './Components/Header'
import Cart from './Components/Cart'
import { CartContextProvider } from './Context/Context'
import Checkout from './Pages/Checkout'
import { BrowserRouter, Routes } from 'react-router'

function App() {
  const [showCart,setShowCart]  =useState<boolean>(false)
  return (
    <CartContextProvider>
      <BrowserRouter>
          <Header handleCart={()=>setShowCart(!showCart)}/>
          {showCart && <div className=''>
            <Cart handleCart={()=>setShowCart(!showCart)}/>
          </div>
          }
          
        
          <div className='pt-[60px] flex flex-col items-center justify-center'>
              <Routes>
                <Dashboard handleCart={()=>setShowCart(!showCart)}/>
                <Checkout/>
              </Routes>
              
          </div>
    </BrowserRouter>
    </CartContextProvider>
  )
}

export default App
