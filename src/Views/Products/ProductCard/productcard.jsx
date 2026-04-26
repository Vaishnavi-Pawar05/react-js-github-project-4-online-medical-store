import { useState } from "react";
import { useNavigate } from "react-router";
import "./productcard.css";
import Button from "../../../Components/button/button.jsx";

function ProductCard({ product }) {
    let navigate = useNavigate();

    return (
        <div className="product-card">
            <img src={product.images?.[0]} alt={product.name} className="product-image" />
            <p className="product-card-title">{product.name}</p>
            <p>{product.subSentence}</p>
            <p  className="productcard-price"> <b>Price:</b> ${product.price.toFixed(2)}</p>

            <Button title={"Know More"} className="know-more-btn" onClick={() =>
                navigate(`/products/${product.productId}`)
            }
            />
        </div>
    );
}
export default ProductCard;