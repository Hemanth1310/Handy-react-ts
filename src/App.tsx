import React,{ useState } from 'react'
import Dashboard from './Pages/Dashboard'
import Header from './Components/Header'
import Cart from './Components/Cart'
import { CartContextProvider } from './Context/Context'

function App() {
  const [showCart,setShowCart]  =useState<boolean>(false)
  return (
    <CartContextProvider>
      <Header handleCart={()=>setShowCart(!showCart)}/>
      {showCart && <div className=''>
        <Cart/>
      </div>
      }
      
    
      <div className='pt-[60px] flex flex-col items-center justify-center'>
          <Dashboard/>
      </div>
    
    </CartContextProvider>
  )
}

export default App
