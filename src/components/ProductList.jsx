import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/CartSlice';
import CartItem from './CartItem';
import AboutUs from './AboutUs';
import './ProductList.css';

function ProductList() {
  const [showCart, setShowCart] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  const plantsArray = [
    {
      category: 'Air Purifying Plants',
      plants: [
        {
          name: 'Snake Plant',
          image: 'https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg',
          description: 'Produces oxygen at night, improving air quality.',
          cost: '$15',
        },
        {
          name: 'Spider Plant',
          image: 'https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg',
          description: 'Filters formaldehyde and xylene from the air.',
          cost: '$12',
        },
        {
          name: 'Peace Lily',
          image: 'https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg',
          description: 'Removes mold spores and purifies indoor surroundings.',
          cost: '$18',
        },
      ],
    },
    {
      category: 'Aromatic Plants',
      plants: [
        {
          name: 'Lavender',
          image: 'https://cdn.pixabay.com/photo/2017/07/24/02/40/lavender-2533383_1280.jpg',
          description: 'Calming aroma known to reduce stress and promote restful sleep.',
          cost: '$20',
        },
        {
          name: 'Jasmine',
          image: 'https://cdn.pixabay.com/photo/2016/06/20/03/15/flower-1468088_1280.jpg',
          description: 'Sweet floral fragrance that enhances relaxation.',
          cost: '$16',
        },
        {
          name: 'Rosemary',
          image: 'https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg',
          description: 'Invigorating herbal scent that sharpens concentration.',
          cost: '$14',
        },
      ],
    },
    {
      category: 'Medicinal Plants',
      plants: [
        {
          name: 'Aloe Vera',
          image: 'https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg',
          description: 'Soothing gel ideal for skin treatments and burns.',
          cost: '$10',
        },
        {
          name: 'Mint',
          image: 'https://cdn.pixabay.com/photo/2017/07/12/12/23/peppermint-2496773_1280.jpg',
          description: 'Refreshing herb useful for digestion and culinary uses.',
          cost: '$8',
        },
        {
          name: 'Tulsi (Holy Basil)',
          image: 'https://cdn.pixabay.com/photo/2017/09/20/12/46/basil-2768434_1280.jpg',
          description: 'Adaptogenic herb known for boosting immunity.',
          cost: '$11',
        },
      ],
    },
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prevState) => ({
      ...prevState,
      [plant.name]: true,
    }));
  };

  const handleContinueShopping = () => {
    setShowCart(false);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="nav-brand" onClick={() => { setShowCart(false); setShowAbout(false); }}>
          <h2>🌿 Paradise Nursery</h2>
        </div>
        <div className="nav-links">
          <button className="nav-btn" onClick={() => { setShowAbout(!showAbout); setShowCart(false); }}>
            About Us
          </button>
          <button className="nav-btn" onClick={() => { setShowCart(false); setShowAbout(false); }}>
            Plants
          </button>
          <div className="cart-icon-container" onClick={() => { setShowCart(true); setShowAbout(false); }}>
            <span className="cart-icon">🛒</span>
            {totalQuantity > 0 && <span className="cart-badge">{totalQuantity}</span>}
          </div>
        </div>
      </nav>

      {showAbout ? (
        <AboutUs />
      ) : showCart ? (
        <CartItem onContinueShopping={handleContinueShopping} />
      ) : (
        <div className="product-grid-container">
          <h1 className="catalog-title">Our Plant Collection</h1>
          {plantsArray.map((categoryGroup, index) => (
            <div key={index} className="category-section">
              <h2 className="category-title">{categoryGroup.category}</h2>
              <div className="plant-cards-grid">
                {categoryGroup.plants.map((plant, plantIdx) => {
                  const isAdded = addedToCart[plant.name] || cartItems.some((item) => item.name === plant.name);
                  return (
                    <div key={plantIdx} className="plant-card">
                      <img src={plant.image} alt={plant.name} className="plant-image" />
                      <h3 className="plant-name">{plant.name}</h3>
                      <p className="plant-description">{plant.description}</p>
                      <p className="plant-cost">{plant.cost}</p>
                      <button
                        className={`add-cart-btn ${isAdded ? 'disabled-btn' : ''}`}
                        onClick={() => handleAddToCart(plant)}
                        disabled={isAdded}
                      >
                        {isAdded ? 'Added to Cart' : 'Add to Cart'}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;
