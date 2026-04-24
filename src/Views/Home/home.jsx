import React, { useState } from 'react';
import './Home.css';
import Navbar from "../../Components/Navbar/navbar";

const Home = () => {
  const [cartCount, setCartCount] = useState(0);

  const products = [
  {
    id: 1,
    name: 'Paracetamol 500mg',
    price: 5.99,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80',
    description: 'Pain relief tablets'
  },
  {
    id: 2,
    name: 'Vitamin C 1000mg',
    price: 12.50,
    image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=400&q=80',
    description: 'Boost immunity'
  },
  {
    id: 3,
    name: 'Face Masks (50 Pack)',
    price: 15.00,
    image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?auto=format&fit=crop&w=400&q=80',
    description: 'Protective masks'
  },
  {
    id: 4,
    name: 'Multivitamin Capsules',
    price: 20.00,
    image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=400&q=80',
    description: 'Complete nutrition'
  },
  {
    id: 5,
    name: 'Hand Sanitizer 500ml',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=400&q=80',
    description: 'Kills 99.9% germs'
  },
  {
    id: 6,
    name: 'First Aid Kit',
    price: 32.00,
    image: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=400&q=80',
    description: 'Complete first aid'
  },
  {
    id: 7,
    name: 'Thermometer Digital',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=400&q=80',
    description: 'Fast & accurate'
  },
  {
    id: 8,
    name: 'Blood Pressure Monitor',
    price: 45.00,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=400&q=80',
    description: 'Monitor health'
  },

   {
    id: 9,
    name: 'Glucose Powder',
    price: 6.50,
  image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=400&q=80",
    description: 'Instant energy boost'
  },
  {
    id: 10,
    name: 'Protein Powder',
    price: 35.00,
    image: 'https://images.unsplash.com/photo-1599058917765-a780eda07a3e?auto=format&fit=crop&w=400&q=80',
    description: 'Muscle recovery supplement'
  },
  {
    id: 11,
    name: 'Insulin Syringe',
    price: 9.99,
   image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=400&q=80",
    description: 'For diabetes care'
  },
  {
    id: 12,
    name: 'Antiseptic Liquid',
    price: 7.50,
 image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=400&q=80",
    description: 'Kills bacteria & viruses'
  },
  {
    id: 13,
    name: 'Cough Syrup',
    price: 10.99,
   image: "https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&w=400&q=80",
    description: 'Relief from cold & cough'
  },
  {
    id: 14,
    name: 'Bandages Pack',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=400&q=80',
    description: 'For minor injuries'
  },
   {
    id: 15,
    name: 'Calcium Tablets',
    price: 14.50,
    image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=400&q=80',
    description: 'Strong bones support'
  }
];

  const handleAddToCart = (productName) => {
    setCartCount(cartCount + 1);
    alert(`${productName} added to cart!`);
  };

  return (
    <div className="home">
      <Navbar />
      <section className="hero">
        <div className="hero-overlay">
          <h1>Welcome to Medical store</h1>
          <p>Your Trusted Online Medical Store</p>
          <p className="hero-subtitle">Quality Medicines & Health Essentials with Fast Delivery</p>
        </div>
      </section>

      <section className="features">
        <div className="feature-item">
          <span className="feature-icon">🚚</span>
          <h3>Free Shipping</h3>
          <p>On orders above $100</p>
        </div>
        <div className="feature-item">
          <span className="feature-icon">💳</span>
          <h3>Secure Payment</h3>
          <p>100% safe transactions</p>
        </div>
        <div className="feature-item">
          <span className="feature-icon">✅</span>
          <h3>Quality Assured</h3>
          <p>Genuine products only</p>
        </div>
        <div className="feature-item">
          <span className="feature-icon">⏰</span>
          <h3>24/7 Support</h3>
          <p>Always here to help</p>
        </div>
      </section>

      <section className="products-section">
        <div className="section-header">
          <h2>Featured Products</h2>
          <p>Shop our best-selling medical products</p>
        </div>

        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-desc">{product.description}</p>
                <div className="product-footer">
                  <span className="product-price">${product.price.toFixed(2)}</span>
                  <button
                    className="add-btn"
                    onClick={() => handleAddToCart(product.name)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="categories-section">
        <h2>Shop by Category</h2>
        <div className="categories-grid">
          <div className="category-card">
            <img src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80" />
            <h3>Medicines</h3>
          </div>
          <div className="category-card">
            <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=400&q=80" />
            <h3>Supplements</h3>
          </div>
          <div className="category-card">
            <img src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&h=300&fit=crop" alt="Personal Care" />
            <h3>Personal Care</h3>
          </div>
          <div className="category-card">
            <img src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=400&q=80" />
            <h3>Baby Care</h3>
          </div>
          <div className="category-card">
            <img src="https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=400&q=80" />
            <h3>First Aid</h3>
          </div>
          <div className="category-card">
            <img src="https://images.unsplash.com/photo-1581595219315-a187dd40c322?auto=format&fit=crop&w=400&q=80" />
            <h3>Medical Devices</h3>
          </div>
        </div>
      </section>
     
    </div>
  );
};

export default Home;
