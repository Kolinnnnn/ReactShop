import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Navbar } from './components/Navbar/Navbar'
import { Dashboard } from './pages/Dashboard'
import { Products } from './pages/Products'
import { Cart } from './components/Cart/Cart'
import { ProductDetail } from './components/ProductDetail/ProductDetail'

function App() {
  const [product, setProduct] = useState([])
  const addToCart = (item) => {
    setProduct([...product,item])
  }
  const removeFromCart = (id) => {
    setProduct(product.filter(item => item.id != id))
  }

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/products/:productId' element={<ProductDetail addToCart={addToCart} removeFromCart={removeFromCart}/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
