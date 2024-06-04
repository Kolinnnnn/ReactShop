import { useParams } from "react-router-dom"
import { products } from "../ProductList/ProductList"
import './ProductDetail.css'

export function ProductDetail({addToCart, removeFromCart}) {
    const {productId} = useParams()
    const product = products.find(x => x.id === parseInt(productId))
    console.log(productId);
    
    return (
        <div>
            <h2>{product.text}</h2>
        </div>
    )
}