import {createContext, useEffect, useMemo } from "react";
import { useState } from "react";
import React from "react"
type ProductType = {
    id: number;
    text: string;
    image: string;
    description?: string;
}
type ProductContextType = {
    cart : ProductType[];
    addToCart: (item:ProductType) => void;
    removeFromCart: (id:number) => void;
    showProducts: () => void;
    products: ProductType[];
}
type ProductProviderType = {
    children: React.ReactNode
}
const ProductContext = createContext<ProductContextType>({} as ProductContextType)
const ProductProvider = ({children}: ProductProviderType) => {
    const [cart, setCart] = useState<ProductType []>([])
    
    const addToCart = (item:ProductType) => {
        setCart((prevProduct) => [...prevProduct,item])
        console.log(cart);
    }
    const removeFromCart = (id: number) => {
        setCart(cart.filter(item => item.id != id))
    }
    const showProducts = () => {
        console.log(cart);
    }
    const products : ProductType[]= [{id:1,text:'Ball',image: "/ball.jpg",description:"ball"},
    {id:2,text:'Chair',image: "/ball.jpg"},
    {id:3,text:'Bed',image: "/ball.jpg"},
    {id:4,text:'Shelf',image: "/ball.jpg"},
    {id:5,text:'Fridge',image: "/ball.jpg"}]
    useEffect(() => {console.log("cartItemUpdated", cart)},[cart])
    return (
        <ProductContext.Provider value={{cart,addToCart,removeFromCart,showProducts,products
            }}>
            {children}
        </ProductContext.Provider>
    )
}

export {ProductContext, ProductProvider}