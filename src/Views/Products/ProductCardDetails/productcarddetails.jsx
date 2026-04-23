import { useParams } from "react-router";
import { useState } from "react";
import PRODUCTS from "../../data.js";
import Navbar from "../../../components/Navbar/navbar.jsx";
import Button from "../../../components/Button/button.jsx";
import { useNavigate } from "react-router";
import "./productcarddetails.css";
import Order from "../../Order/order.jsx";

function ProductCardDetails() {
    const { productId } = useParams();
    const [currentImage, setCurrentImage] = useState(null);
    const product = PRODUCTS.find(p => p.productId === (productId));

    const displayImage = currentImage || (product?.images?.[0] || "");

    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }
    function decrement() {
        setCount(count - 1);
    }

    let navigate = useNavigate();

    return (
        <div className="product-details">
            <Navbar />
            <div className="product-all-info">
                <div className="product-detail-images">
                    <img src={displayImage} alt={product.name} className="deatailpage-product-image" />
                    <div className="small-images-container">
                        {product.images?.map((images, index) => {
                            return <img key={index} src={images} alt={`${product.name} ${index + 1}`}
                                className="product-small-images" onClick={() => {
                                    setCurrentImage(images);
                                }
                                } />
                        })}
                    </div>
                </div>
                <div className="product-details-info">
                    <h1>{product.name}</h1>
                    <p className="product-description">{product.description}</p>
                    <p className="product-price">Price: ${product.price.toFixed(2)}</p>

                    <button onClick={decrement}>-</button>
                    <span id="counter">{count}</span>
                    <button onClick={increment}>+</button>
                    <p>Total Price: ${(count * product.price).toFixed(2)}</p>
                    <Button title={"Buy Now"} className="buy-now-btn" onClick={() => {
                        navigate(`/order/${product.productId}`);
                    }} />
                </div>
            </div>
        </div>
    );
}
export default ProductCardDetails;