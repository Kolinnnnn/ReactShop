import {createContext, useEffect, useMemo } from "react";
import { useState } from "react";

const ProductContext = createContext()
const ProductProvider = ({children}) => {
    const [product, setProduct] = useState([])
    const contextValue = useMemo(() => ({
        product,
        addToCart : (item) => {
            setProduct((prevProduct) => [...prevProduct,item])
            console.log(product)
        },
        removeFromCart : (id) => {
            setProduct(product.filter(item => item.id != id))
        },
        showProducts : () => {
            console.log(product);
        },
        products : [{id:1,text:'Ball'},
        {id:2,text:'Chair'},
        {id:3,text:'Bed'},
        {id:4,text:'Shelf'},
        {id:5,text:'Fridge'}]
        }),[product])
    // const addToCart = (item) => {
    //     setProduct((prevProduct) => [...prevProduct,item])
    //     console.log(product);
    // }
    // const removeFromCart = (id) => {
    //     setProduct(product.filter(item => item.id != id))
    // }
    // const showProducts = () => {
    //     console.log(product);
    // }
    // const products = [{id:1,text:'Ball'},
    // {id:2,text:'Chair'},
    // {id:3,text:'Bed'},
    // {id:4,text:'Shelf'},
    // {id:5,text:'Fridge'}]
    useEffect(() => {console.log("cartItemUpdated", product)},[product])
    return (
        <ProductContext.Provider value={contextValue}>
            {children}
        </ProductContext.Provider>
    )
}

export {ProductContext, ProductProvider}