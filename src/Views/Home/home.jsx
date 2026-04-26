import React, { useState, useEffect } from 'react';
import './Home.css';
import Navbar from "../../Components/Navbar/navbar.jsx";
import Footer from "../../Components/footer/footer.jsx";
import { Link } from "react-router-dom";

const Home = () => {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const products = [
    { id: 1, name: 'Paracetamol 500mg', price: 5.99, image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80', description: 'Fever & pain relief' },
    { id: 2, name: 'Vitamin C Tablets', price: 12.50, image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=400&q=80', description: 'Boost immunity' },
    { id: 3, name: 'Cough Syrup', price: 10.99, image: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&w=400&q=80', description: 'Cold relief' },
    { id: 4, name: 'Hand Sanitizer', price: 8.99, image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=400&q=80', description: 'Kills germs' },
    { id: 5, name: 'First Aid Kit', price: 32.00, image: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=400&q=80', description: 'Emergency kit' },
    { id: 6, name: 'Thermometer', price: 12.99, image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=400&q=80', description: 'Temperature check' },
    { id: 7, name: 'BP Monitor', price: 45.00, image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=400&q=80', description: 'Health monitor' },
    { id: 8, name: 'Bandage Pack', price: 4.99, image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?auto=format&fit=crop&w=400&q=80', description: 'Wound care' },
   { id: 9, name: 'Bandage Pack', price: 4.99, image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?auto=format&fit=crop&w=400&q=80', description: 'Wound protection' },
  { id: 10, name: 'Calcium Tablets', price: 14.50, image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=400&q=80', description: 'Strong bones support' },
 { id: 11, name: 'Antiseptic Liquid', price: 7.50, image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=400&q=80', description: 'Wound cleaning' },
 { id: 12, name: 'Face Mask (50 Pack)', price: 15.00, image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?auto=format&fit=crop&w=400&q=80', description: 'Protection mask' },
 { id: 13, name: 'Multivitamin Capsule', price: 20.00, image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=400&q=80', description: 'Daily health support' },
 { id: 14, name: 'Glucose Powder', price: 6.50, image: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=400&q=80', description: 'Instant energy boost' },
{ id: 15, name: 'Antibiotic Tablets', price: 18.00, image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80', description: 'Infection treatment' },
 ];

  const addToCart = (product) => {
    const exist = cart.find(i => i.id === product.id);

    if (exist) {
      setCart(cart.map(i =>
        i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const increaseQty = (id) => {
    setCart(cart.map(i =>
      i.id === id ? { ...i, quantity: i.quantity + 1 } : i
    ));
  };

  const decreaseQty = (id) => {
    setCart(
      cart
        .map(i =>
          i.id === id ? { ...i, quantity: i.quantity - 1 } : i
        )
        .filter(i => i.quantity > 0)
    );
  };

  const totalItems = cart.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <div className="home">
      <Navbar />

      <section className="hero">
        <div className="hero-overlay">
          <h1>Welcome to Medical Store</h1>
          <p>Your Trusted Online Medical Store</p>
          <p className="hero-subtitle">
             Quality Medicines & Health Essentials with Fast Delivery 
             </p>
        </div>
      </section>

      <h3 style={{ textAlign: "center" }}>🛒 Items: {totalItems}</h3>

      <section className="products-section">
        <h2 style={{ textAlign: "center" }}>Products</h2>

        <div className="products-grid">

          {products.map(product => {

            const cartItem = cart.find(i => i.id === product.id);
            const qty = cartItem ? cartItem.quantity : 0;

            return (
              <div key={product.id} className="product-card">

                <img src={product.image} alt={product.name} />

                <h3>{product.name}</h3>
                <p>{product.description}</p>

                <h4>₹{(product.price * (qty || 1)).toFixed(2)}</h4>

                <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                  
                  <button onClick={() => decreaseQty(product.id)}>➖</button>

                  <span>{qty}</span>

                  <button onClick={() => increaseQty(product.id)}>➕</button>

                </div>
                <br></br>

                <button 
                  className="add-btn"
                  onClick={() => addToCart(product)}
                >
                  Add To Cart
                </button>

              </div>
            )
          })}

        </div>
      </section>

      <section className="about-section">
         <div className="about-wrapper"> 
          <div className="about-img">
             <img src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80" alt="Medical Store" /> 
             </div> <div className="about-text">
               <h2>About Our Medical Store</h2> 
               <p> We provide trusted medicines, healthcare products, and medical equipment with fast delivery and affordable prices. </p> 
               <div className="about-highlights"> 
                <div className="highlight-box">✔ Genuine Medicines</div>
                 <div className="highlight-box">🚚 Fast Delivery</div> 
                 <div className="highlight-box">💊 Quality Products</div> 
                 <div className="highlight-box">📞 24/7 Support</div>
                  </div>
                   <Link to="/products"> 
                   <button className="about-btn"> Explore More </button>
                    </Link> 
                    </div>
                     </div>
                      </section>
   <Footer />
    </div>
  );
};

export default Home;