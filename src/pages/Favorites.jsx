// src/pages/Favorites.jsx
import { useEffect, useState } from "react";
import { PropertyCard } from "../Components/PropertyCard";
//import { PropertyCard } from "./components/PropertyCard";
import "../app.css";
const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  const fetchFavorites = () => {
    fetch("https://artpainting-82c83-default-rtdb.firebaseio.com/favorites.json")
      .then((res) => res.json())
      .then((data) => {
        if (data) setFavorites(Object.values(data));
        else setFavorites([]);
      });
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  const handleRemove = (id) => {
    fetch(
      `https://artpainting-82c83-default-rtdb.firebaseio.com/favorites/${id}.json`,
      { method: "DELETE" }
    ).then(() => fetchFavorites());
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>💖 Your Favorites</h2>
      {favorites.length === 0 ? (
        <p style={{ textAlign: "center" }}>No favorites yet.</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {favorites.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              showRemove={true}
              onRemove={() => handleRemove(property.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
