import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

function ProductList() {
  const [showCart, setShowCart] = useState(false);
  const [addedNodes, setAddedNodes] = useState({});
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate total quantity for the cart icon badge
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        { name: "Snake Plant", image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg", description: "Produces oxygen at night.", cost: "$15" },
        { name: "Spider Plant", image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg", description: "Filters formaldehyde and xylene.", cost: "$12" },
        { name: "Peace Lily", image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lily-4269365_1280.jpg", description: "Removes mold spores.", cost: "$18" },
        { name: "Boston Fern", image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg", description: "Adds humidity indoors.", cost: "$14" },
        { name: "Rubber Plant", image: "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg", description: "Easy to grow indoor plant.", cost: "$20" },
        { name: "Aloe Vera", image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg", description: "Soothes skin & purifies air.", cost: "$10" }
      ]
    },
    {
      category: "Aromatic Fragrant Plants",
      plants: [
        { name: "Lavender", image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba", description: "Calming scent.", cost: "$20" },
        { name: "Jasmine", image: "https://images.unsplash.com/photo-1592729808999-652d231c0d3a", description: "Sweet floral fragrance.", cost: "$18" },
        { name: "Rosemary", image: "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg", description: "Invigorating herb.", cost: "$15" },
        { name: "Mint", image: "https://cdn.pixabay.com/photo/2016/01/07/09/16/mint-1125519_1280.jpg", description: "Refreshing aroma.", cost: "$10" },
        { name: "Lemon Balm", image: "https://cdn.pixabay.com/photo/2015/07/10/17/53/lemon-balm-840224_1280.jpg", description: "Citrusy scent.", cost: "$12" },
        { name: "Hyacinth", image: "https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg", description: "Beautiful fragrant blooms.", cost: "$22" }
      ]
    },
    {
      category: "Medicinal Plants",
      plants: [
        { name: "Echinacea", image: "https://cdn.pixabay.com/photo/2014/12/05/09/26/echinacea-557719_1280.jpg", description: "Boosts immune health.", cost: "$16" },
        { name: "Peppermint", image: "https://cdn.pixabay.com/photo/2017/07/12/12/23/peppermint-2496773_1280.jpg", description: "Aids digestion.", cost: "$13" },
        { name: "Lemon Grass", image: "https://cdn.pixabay.com/photo/2015/06/19/20/11/lemon-grass-815252_1280.jpg", description: "Relieves pain and stress.", cost: "$14" },
        { name: "Chamomile", image: "https://cdn.pixabay.com/photo/2016/08/11/08/04/chamomile-1585093_1280.jpg", description: "Soothes anxiety.", cost: "$15" },
        { name: "Calendula", image: "https://cdn.pixabay.com/photo/2019/07/12/07/02/marigold-4332021_1280.jpg", description: "Heals skin irritations.", cost: "$12" },
        { name: "Thyme", image: "https://cdn.pixabay.com/photo/2017/05/10/12/50/thyme-2300816_1280.jpg", description: "Antibacterial properties.", cost: "$11" }
      ]
    }
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedNodes((prevState) => ({
      ...prevState,
      [plant.name]: true,
    }));
  };

  return (
    <div>
      <nav className="navbar">
        <h2>Paradise Nursery</h2>
        <div className="nav-links">
          <a href="#" onClick={(e) => { e.preventDefault(); setShowCart(false); }}>Home</a>
          <a href="#" onClick={(e) => { e.preventDefault(); setShowCart(false); }}>Plants</a>
          <a href="#" onClick={(e) => { e.preventDefault(); setShowCart(true); }}>
            🛒 Cart ({totalQuantity})
          </a>
        </div>
      </nav>

      {!showCart ? (
        <div className="product-grid">
          {plantsArray.map((categoryObj, index) => (
            <div key={index} className="category-section">
              <h1>{categoryObj.category}</h1>
              <div className="plant-list">
                {categoryObj.plants.map((plant, plantIdx) => (
                  <div key={plantIdx} className="product-card">
                    <img src={plant.image} alt={plant.name} />
                    <h3>{plant.name}</h3>
                    <p>{plant.description}</p>
                    <p className="product-cost">{plant.cost}</p>
                    <button 
                      disabled={addedNodes[plant.name]} 
                      onClick={() => handleAddToCart(plant)}
                    >
                      {addedNodes[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={() => setShowCart(false)} />
      )}
    </div>
  );
}

export default ProductList;
