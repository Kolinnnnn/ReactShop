import { useContext } from 'react'
import './ProductList.css'
import { ProductContext } from '../../ProductContext'
import React from "react"
export function ProductList() {
    const contextValue = useContext(ProductContext)
    return <div>
        <h2>Products</h2>
        <ul>
            {contextValue.products.map(item => (<li key={item.id}><a href={`/products/${item.id}`}>{item.text}</a></li>))}
        </ul>
    </div>
}