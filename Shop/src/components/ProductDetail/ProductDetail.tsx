import { useParams } from "react-router-dom"
import './ProductDetail.css'
import { useContext, useState} from "react"
import { ProductContext } from "../../ProductContext"
import React from "react"

export function ProductDetail() {
    const {products,reviewProduct,addToCart} = useContext(ProductContext)
    const {productId} = useParams()
    const product = productId ? products.find(x => x.id === parseInt(productId)) : {id:0,text:"",image:""}
    const [reviewText, setReviewText] = useState("");
    console.log(productId);
    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setReviewText(e.target.value);
    };

    const handleAddReview = () => {
        if (product && product.id && reviewText.trim()) {
            reviewProduct(product.id, reviewText);
            setReviewText("");
        }
    };

    return (
        <>
        {product ? (
            <div className="product-detail">
                <div>
                    <h2>{product.text}</h2>
                    <img src={product.image} alt={product.text}></img>
                    <p>{product.description ? product.description : ""}</p>
                </div>

                <button onClick={() => addToCart(product)}>Add to Cart</button>
                <div className="review-section">
                    <h3>Reviews</h3>
                    {product.review && product.review.length > 0 ? (
                        <ul>
                            {product.review.map((review, index) => (
                                <li key={index}>{review}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>No reviews yet</p>
                    )}

                    <input 
                        type="text" 
                        value={reviewText} 
                        onChange={handleInputChange} 
                        placeholder="Write your review here" 
                    />

                    <button onClick={handleAddReview}>Add Review</button>
                </div>
            </div>
        ) : (
            <h1>Product doesn't exist</h1>
        )}
        </>
    );
}