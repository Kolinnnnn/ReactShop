import { useParams } from "react-router-dom"
import './ProductDetail.css'
import { useContext } from "react"
import { ProductContext } from "../../ProductContext"

export function ProductDetail() {
    const contextValue = useContext(ProductContext)
    const {productId} = useParams()
    const product = contextValue.products.find(x => x.id === parseInt(productId))
    console.log(productId);
    
    return (
        <div>
        <div>
            <h2>{product.text}</h2>
        </div>
        <button onClick={() => contextValue.addToCart(product)}>Add</button>
        </div>
    )
}