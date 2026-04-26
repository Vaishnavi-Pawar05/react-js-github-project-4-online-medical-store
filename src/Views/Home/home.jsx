import React, { useState, useEffect } from 'react';
import './Home.css';
import Navbar from "../../Components/navbar/navbar.jsx";
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
   { id: 3, name: 'Cough Syrup', price: 10.99, image: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&w=400&q=80',description: 'Cold relief' }, 
   { id: 4, name: 'Hand Sanitizer', price: 8.99, image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=400&q=80', description: 'Kills germs' }, 
   { id: 5, name: 'First Aid Kit', price: 32.00, image: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=400&q=80', description: 'Emergency kit' }, 
   { id: 6, name: 'Thermometer', price: 12.99, image: 'https://images.unsplash.com/photo-1740560516658-5a94b0b715ed?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGhlcm1vbWV0ZXJ8ZW58MHx8MHx8fDA%3D', description: 'Temperature check' }, 
   { id: 7, name: 'BP Monitor', price: 45.00, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoJ7ch8-HzCkQZGOtCaAZ9i879uRflpYHawg&s', description: 'Health monitor' }, 
   { id: 8, name: 'Bandage Pack', price: 4.99, image: 'https://us.123rf.com/450wm/studiofennel/studiofennel2208/studiofennel220800122/189825844-top-view-of-first-aid-kit-bandage-adhesive-plaster-tape-and.jpg?ver=6', description: 'Wound care' }, 
   { id: 9, name: 'fever', price: 4.99, image: 'https://assets-us-01.kc-usercontent.com/ffacfe7d-10b6-0083-2632-604077fd4eca/c363d678-35b8-4491-b8eb-7b8f05e73749/What-Are-Compounded-Medications-iStock-1778918997-2024-8-FBLI-1200x630.jpg', description: 'Wound protection' },
    { id: 10, name: 'Calcium Tablets', price: 14.50, image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=400&q=80', description: 'Strong bones support' },
     { id: 11, name: 'Antiseptic Liquid', price: 7.50, image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=400&q=80', description: 'Wound cleaning' }, 
     { id: 12, name: 'Face Mask (50 Pack)', price: 15.00, image: 'https://media.istockphoto.com/id/1061189838/vector/facial-sheet-mask-sachet-package-mockup-set-vector-realistic-illustration-isolated-on-white.jpg?s=612x612&w=0&k=20&c=SMj74w70uYvjTYdagbAdGUx1LGmJeS_i7WJK1O6QNJM=', description: 'Protection mask' },
      { id: 13, name: 'Multivitamin Capsules', price: 20.00, image: 'https://www.shutterstock.com/image-photo/selective-focus-bottle-pure-dextrose-260nw-1903145224.jpg', description: 'Daily health support' },
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
        <h1>Welcome to Medical Store</h1>
        <p>Your Trusted Online Medical Store</p>
        <p className="hero-subtitle"> Quality Medicines & Health Essentials with Fast Delivery </p>
      </section>

      <br></br>

       <center> <h1>Products</h1></center>
      <section className="products-section">

        <div className="products-grid">
          {products.map(product => {
            const cartItem = cart.find(i => i.id === product.id);
            const qty = cartItem ? cartItem.quantity : 0;

            return (
              <div key={product.id} className="product-card">

                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>

                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="product-desc">{product.description}</p>

                  <h4 className="product-price">
                    ${(product.price * (qty || 1)).toFixed(2)}
                  </h4>

                  <div className="quantity-controls">
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

              </div>
            );
          })}
        </div>
      </section>
            <h3 className="cart-count">🛒 Items: {totalItems}</h3>

      <section className="about-section">
        <div className="about-wrapper">

          <div className="about-img">
            <img src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80" alt="Medical Store" />
          </div>

          <div className="about-text">
            <h2>About Our Medical Store</h2>
            <p>We provide trusted medicines and healthcare products with fast delivery.</p>

            <div className="about-highlights">
              <div>✔ Genuine Medicines</div>
              <div>🚚 Fast Delivery</div>
              <div>💊 Quality Products</div>
              <div>📞 24/7 Support</div>
            </div>

            <Link to="/products">
              <button className="about-btn">Explore More</button>
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;