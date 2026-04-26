import { useParams } from "react-router";
import { useState } from "react";
import PRODUCTS from "../../data.js";
import Navbar from "../../../Components/Navbar/navbar.jsx";
import Footer from "../../../Components/Footer/footer.jsx";
import Button from "../../../components/Button/button.jsx";
import { useNavigate } from "react-router";
import "./productcarddetails.css";
import Order from "../../Order/order.jsx";
import toast, { Toaster } from "react-hot-toast";

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
        if (count > 0) {
            setCount(count - 1);
        }
    }

    let navigate = useNavigate();
   
    return (
        <div className="product-details">
            <Toaster position="top-center" />
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
                    <h1 className="product-details-title">{product.name}</h1>
                    <p className="product-description">{product.description}</p>
                    <p className="gram-info"><span className="gram-label">Gram:</span> {product.maxGram}</p>
                    <p className="product-price"><span className="price-label"> Price:</span> ${product.price.toFixed(2)}</p>

                    <div className="counter">
                        <h6>Select Quantity:</h6>
                        <button onClick={decrement} className="decrement"><span className="sub">-</span></button>
                        <span id="counter">{count}</span>
                        <button onClick={increment} className="increment"><span className="add">+</span></button>
                    </div>

                    <p className="product-price"><span className="price-label">Total Price:</span> ${(count * product.price).toFixed(2)}</p>
                    <Button
                        title={"Buy Now"}
                        className="buy-now-btn"
                        onClick={() => {

                            if (count === 0) {
                                toast.error("Please select quantity");
                                return; 
                            }
                            const orderData = {
                                name: product.name,
                                price: Number(product.price), 
                                quantity: count,
                                totalPrice: product.price * count
                            };

                            localStorage.setItem("order", JSON.stringify(orderData));

                            navigate(`/order/${product.productId}`);
                        }}
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default ProductCardDetails;