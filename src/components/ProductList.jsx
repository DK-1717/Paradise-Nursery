import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const plants = [
  // Indoor Plants
  { id: 1, name: "Snake Plant", price: 10, category: "Indoor", image: "https://via.placeholder.com/100" },
  { id: 2, name: "Peace Lily", price: 12, category: "Indoor", image: "https://via.placeholder.com/100" },
  { id: 3, name: "Spider Plant", price: 8, category: "Indoor", image: "https://via.placeholder.com/100" },
  { id: 4, name: "Rubber Plant", price: 15, category: "Indoor", image: "https://via.placeholder.com/100" },
  { id: 5, name: "Aloe Vera", price: 9, category: "Indoor", image: "https://via.placeholder.com/100" },
  { id: 6, name: "Areca Palm", price: 18, category: "Indoor", image: "https://via.placeholder.com/100" },

  // Outdoor Plants
  { id: 7, name: "Rose", price: 7, category: "Outdoor", image: "https://via.placeholder.com/100" },
  { id: 8, name: "Tulsi", price: 5, category: "Outdoor", image: "https://via.placeholder.com/100" },
  { id: 9, name: "Hibiscus", price: 11, category: "Outdoor", image: "https://via.placeholder.com/100" },
  { id: 10, name: "Marigold", price: 6, category: "Outdoor", image: "https://via.placeholder.com/100" },
  { id: 11, name: "Jasmine", price: 9, category: "Outdoor", image: "https://via.placeholder.com/100" },
  { id: 12, name: "Bougainvillea", price: 14, category: "Outdoor", image: "https://via.placeholder.com/100" },

  // Succulents
  { id: 13, name: "Echeveria", price: 6, category: "Succulent", image: "https://via.placeholder.com/100" },
  { id: 14, name: "Haworthia", price: 7, category: "Succulent", image: "https://via.placeholder.com/100" },
  { id: 15, name: "Jade Plant", price: 8, category: "Succulent", image: "https://via.placeholder.com/100" },
  { id: 16, name: "Sedum", price: 5, category: "Succulent", image: "https://via.placeholder.com/100" },
  { id: 17, name: "Agave", price: 13, category: "Succulent", image: "https://via.placeholder.com/100" },
  { id: 18, name: "Kalanchoe", price: 9, category: "Succulent", image: "https://via.placeholder.com/100" },
];

const categories = ["Indoor", "Outdoor", "Succulent"];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const isAdded = (id) => cartItems.some((item) => item.id === id);

  return (
    <div>

      {/* Navbar */}
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/plants">Plants</Link> |{" "}
        <Link to="/cart">Cart ({cartItems.length})</Link>
      </nav>

      <h1>Plants</h1>

      {categories.map((cat) => (
        <div key={cat}>
          <h2>{cat} Plants</h2>

          {plants
            .filter((plant) => plant.category === cat)
            .map((plant) => (
              <div key={plant.id} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
                <img src={plant.image} alt={plant.name} />
                <h3>{plant.name}</h3>
                <p>${plant.price}</p>

                <button
                  onClick={() => dispatch(addItem(plant))}
                  disabled={isAdded(plant.id)}
                >
                  {isAdded(plant.id) ? "Added" : "Add to Cart"}
                </button>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
