import { useParams } from "react-router-dom"
import './ProductDetail.css'
import { useContext } from "react"
import { ProductContext } from "../../ProductContext"
import React from "react"

export function ProductDetail() {
    const {cart,products,addToCart} = useContext(ProductContext)
    const {productId} = useParams()
    const product = productId ? products.find(x => x.id === parseInt(productId)) : {id:0,text:"",image:""}
    console.log(productId);
    
    return <>
    {product ? 
            <div>
        <div>
            <h2>{product.text}</h2>
            <img src={product.image}></img>
            <p>{product.description ? product.description: ""}</p>
        </div>
        <button onClick={() => addToCart(product)}>Add</button>
        </div> : <h1>Doesnt exist</h1>
        }
    </>    
}