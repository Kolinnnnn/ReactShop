import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Navbar } from './components/Navbar/Navbar'
import { Dashboard } from './pages/Dashboard'
import { Products } from './pages/Products'
import { CartPage } from './pages/Cart'
import { Cart } from './components/Cart/Cart'
import { ProductDetail } from './components/ProductDetail/ProductDetail'
import { ProductProvider } from './ProductContext'
import React from "react"

function App() {

  return (
    <ProductProvider>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/products/:productId' element={<ProductDetail/>}></Route>
      </Routes>
    </BrowserRouter>
    </ProductProvider>
  )
}
export default App
