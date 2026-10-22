# Paradise Nursery Shopping Application

Paradise Nursery is an e-commerce React application designed for plant lovers. It allows users to browse a wide variety of houseplants across multiple categories, add plants to a shopping cart, and manage their order dynamically with Redux state management.

## Features

- **Landing Page:** Welcoming introduction with an overview of Paradise Nursery, company mission, and a "Get Started" button.
- **Product Listing:** Organized houseplants into multiple categories (e.g., Air Purifying, Aromatic, Medicinal) with detailed cards showing images, descriptions, and prices.
- **Dynamic Cart Management:**
  - Add items to the cart (disables the button once added).
  - Real-time cart badge counter in the navigation bar.
- **Shopping Cart Page:**
  - Dynamic item totals and overall cost calculation.
  - Increment, decrement, or remove items seamlessly.
  - "Continue Shopping" navigation and checkout placeholder.

## Tech Stack / Tools

- **Frontend:** React.js, HTML5, CSS3
- **State Management:** Redux Toolkit (`@reduxjs/toolkit`, `react-redux`)
- **Build / Tooling:** npm, Node.js

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/kanakGhule/github-final-project.git
   ```

2. Navigate into the project directory:
   ```bash
   cd github-final-project
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

## Folder Structure

```text
src/
├── components/
│   ├── AboutUs.jsx
│   ├── ProductList.jsx
│   └── CartItem.jsx
├── redux/
│   └── CartSlice.jsx
├── App.jsx
├── App.css
└── index.js
```
