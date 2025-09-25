import { useEffect, useState } from "react";
//import { PropertyCard } from "./Components/PropertyCard";
//import { PropertyCard } from "./PropertyCard";
import "../App.css";

import { Link } from "react-router-dom";
import { PropertyCard } from "./components/PropertyCard";

export function Favorites() {
  const [favorites, setFavorites] = useState([]);

  const fetchFavorites = () => {
    fetch("https://transfer-list-cd1d4-default-rtdb.firebaseio.com/favorites.json")
      .then((res) => res.json())
      .then((data) => {
        const list = data ? Object.values(data) : [];
        setFavorites(list);
      })
      .catch((err) => alert("Error fetching favorites: " + err));
  };

  useEffect(() => {
  fetch("https://transfer-list-cd1d4-default-rtdb.firebaseio.com/favorites.json")
    .then((res) => res.json())
    .then((data) => {
      if (!data) {
        setFavorites([]);
        return;
      }

      const entries = Object.entries(data); 

    
      entries.forEach(([key, value]) => {
        if (value === null) {
          fetch(`https://transfer-list-cd1d4-default-rtdb.firebaseio.com/favorites/${key}.json`, {
            method: "DELETE",
          });
        }
      });

      const cleaned = entries
        .filter(([, value]) => value !== null)
        .map(([, value]) => value);

      setFavorites(cleaned);
    })
    .catch((err) => alert("Error fetching favorites: " + err));
}, []);

  const handleRemove = (id) => {
    fetch(`https://transfer-list-cd1d4-default-rtdb.firebaseio.com/favorites/${id}.json`, {
      method: "DELETE",
    })
      .then(() => {
        alert("❌ Removed from Favorites");
        fetchFavorites(); 
      })
      .catch((err) => alert("Error removing favorite: " + err));
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", margin: "20px 0" }}>💖 Your Favorite Properties</h2>

      {favorites.length === 0 ? (
        <p style={{ textAlign: "center" }}>No favorites added yet.</p>
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

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Link to="/">⬅ Back to Listings</Link>
      </div>
    </div>
  );
}
