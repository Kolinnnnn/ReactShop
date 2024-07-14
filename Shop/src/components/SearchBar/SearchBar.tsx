import React, { useContext, useEffect, useState } from "react";
import { ProductContext, ProductType } from "../../ProductContext";
import { Navigate, useNavigate } from "react-router-dom";
import './SearchBar.css'

export function SearchBar() {
    const navigate = useNavigate()
    const [currentValue,setCurrentValue] = useState<string>("")
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setCurrentValue(e.target.value)
    }
    const{products} = useContext(ProductContext)
    const [filteredProduct,setFilteredProduct] = useState<ProductType[]>([])
    useEffect(() => {
        const filteredProducts = products.filter(item  => {
            const itemText = item.text.toLowerCase()
            const searchValue = currentValue.toLowerCase()
            return itemText.includes(searchValue)
        })
        setFilteredProduct(filteredProducts)
    },[currentValue])
    const handleProductClick = (productId) => {
        navigate(`/products/${productId}`)
    }
    return(
        <div className="searchBarContainer">
            <input type="text" placeholder="search" value={currentValue} onChange={handleChange} className="searchBarInput"></input>
            {currentValue && (
                <ul className="dropdown">
                    {
                        filteredProduct.map(item => (
                            <li key={item.id} onClick={() => handleProductClick(item.id)}>
                                {item.text}
                            </li>
                        ))
                    }
                </ul>
            )}
        </div>
    )
}