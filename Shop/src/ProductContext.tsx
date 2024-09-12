import {createContext, useEffect, useMemo } from "react";
import { useState } from "react";
import React from "react"
export type ProductType = {
    id: number;
    text: string;
    image: string;
    description?: string;
    review?: string[];
}
type ProductContextType = {
    cart : ProductType[];
    addToCart: (item:ProductType) => void;
    reviewProduct: (id:number, text:string) => void; 
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
    const [products, setProducts] = useState<ProductType []>([{id:1,text:'Ball',image: "/ball.jpg",description:"ball"},
        {id:2,text:'Chair',image: "/chair.jpg"},
        {id:3,text:'Bed',image: "/bed.jpg"},
        {id:4,text:'Shelf',image: "/shelf.jpg"},
        {id:5,text:'Fridge',image: "/fridge.jpg"}])
    const addToCart = (item:ProductType) => {
        setCart((prevProduct) => [...prevProduct,item])
        console.log(cart);
    }
    const reviewProduct = (id:number, text:string) => {
        // const foundProduct = products.filter(item => item.id == id)
        // foundProduct[0].review?.push(text)
        const foundUpdatedArray:ProductType[] = products.map(item => item.id == id ? {...item, review:[...(item.review ? item.review : []),text]} : item)
        setProducts(foundUpdatedArray)
    }
    const removeFromCart = (id: number) => {
        setCart(cart.filter(item => item.id != id))
    }
    const showProducts = () => {
        console.log(cart);
    }
    useEffect(() => {console.log("cartItemUpdated", cart)},[cart])
    return (
        <ProductContext.Provider value={{cart,addToCart,reviewProduct,removeFromCart,showProducts,products
            }}>
            {children}
        </ProductContext.Provider>
    )
}

export {ProductContext, ProductProvider}