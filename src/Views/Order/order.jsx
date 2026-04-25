import { useState } from "react";
import { AlertCircle } from "lucide-react";
import "./order.css";
import Navbar from "../../Components/Navbar/navbar";

export default function OrderPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    payment: "COD"
  });

  const [error, setError] = useState("");

  // Dummy product
  const product = {
    name: "Paracetamol",
    price: 50,
    qty: 2
  };

  const total = product.price * product.qty + 20;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleOrder = (e) => {
    e.preventDefault();
    setError("");

    if (!formData.name || !formData.phone || !formData.address) {
      setError("Please fill all required fields");
      return;
    }

    alert("Order Placed Successfully 🎉");
    console.log(formData);
  };

  return (
    <>
      <Navbar />

      <div className="order-page">
        <div className="order-card">

          <h2>Place Your Order</h2>

          {/* Error */}
          {error && (
            <div className="message-box error-message">
              <AlertCircle size={18} />
              <span>{error}</span>
            </div>
          )}

          {/* Order Summary */}
          <div className="order-summary">
            <h3>Order Summary</h3>
            <p>{product.name} x {product.qty}</p>
            <p>Price: ₹{product.price * product.qty}</p>
            <p>Delivery: ₹20</p>
            <h4>Total: ₹{total}</h4>
          </div>

          {/* Form */}
          <form onSubmit={handleOrder} className="order-form">

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
            />

            <input
              type="text"
              name="phone"
              placeholder="Mobile Number"
              onChange={handleChange}
            />

            <input
              type="text"
              name="address"
              placeholder="Address"
              onChange={handleChange}
            />

            <input
              type="text"
              name="city"
              placeholder="City"
              onChange={handleChange}
            />

            <input
              type="text"
              name="pincode"
              placeholder="Pincode"
              onChange={handleChange}
            />

            {/* Payment */}
            <div className="payment">
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="COD"
                  checked={formData.payment === "COD"}
                  onChange={handleChange}
                />
                Cash on Delivery
              </label>

              <label>
                <input
                  type="radio"
                  name="payment"
                  value="UPI"
                  onChange={handleChange}
                />
                UPI
              </label>
            </div>

            {/* ✅ QR Code */}
            {formData.payment === "UPI" && (
              <div className="upi-box">
                <p>Scan QR to Pay</p>
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=upi://pay?pa=demo@upi"
                  alt="QR Code"
                />
              </div>
            )}

            <button className="primary-button">Place Order</button>
          </form>

        </div>
      </div>
    </>
  );
}