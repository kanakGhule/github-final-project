import React, { useState } from 'react';
import ProductList from './components/ProductList';
import AboutUs from './components/AboutUs';
import './App.css';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStarted = () => {
    setShowProductList(true);
  };

  return (
    <div className="app-container">
      {!showProductList ? (
        <div className="landing-page">
          <div className="landing-content">
            <h1 className="landing-title">Welcome To Paradise Nursery</h1>
            <div className="divider"></div>
            <p className="landing-subtitle">Where Green Meets Serenity</p>
            <button className="get-started-button" onClick={handleGetStarted}>
              Get Started
            </button>
            <div className="landing-about">
              <AboutUs />
            </div>
          </div>
        </div>
      ) : (
        <div className="product-list-container">
          <ProductList />
        </div>
      )}
    </div>
  );
}

export default App;
