// src/components/PropertyCard.jsx
import { Link } from "react-router-dom";
import "../App.css";
import Favorites from "../pages/Favorites";
export function PropertyCard({ property, showRemove, onRemove }) {
  const addToFavorites = () => {
    fetch(
      `https://artpainting-82c83-default-rtdb.firebaseio.com/favorites/${property.id}.json`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(property),
      }
    )
      .then(() => alert("✅ Added to Favorites!"))
      .catch((err) => alert("❌ Error: " + err));
  };

  return (
    <div
      style={{
        width: "300px",
        margin: "12px",
        borderRadius: "12px",
        padding: "12px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        // backgroundImage: "linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)"
        // backgroundImage: "linear-gradient(-225deg, #B6CEE8 0%, #F578DC 100%)",
        // backgroundImage: "linear-gradient(-180deg, #BCC5CE 0%, #929EAD 98%), radial-gradient(at top left, rgba(255,255,255,0.30) 0%, rgba(0,0,0,0.30) 100%)",
 backgroundImage:" linear-gradient(to top, lightgrey 0%, lightgrey 1%, #e0e0e0 26%, #efefef 48%, #d9d9d9 75%, #bcbcbc 100%)",
        // backgroundImage: "linear-gradient(to top, #4481eb 0%, #04befe 100%)",
      }}
    >
      <img
  src={property.images && property.images.length > 0 ? property.images[0] : ""}
  alt={property.title}
  style={{
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "8px",
  }}
/>
      <h3>{property.title}</h3>
      <p>Type: {property.type}</p>
      <p>Price: ₹{property.price}</p>
      <p>
        🛁 {property.bathrooms} | 🛏 {property.bedrooms}
      </p>
      <p>📍 {property.location}</p>

      <Link to={`/property/${property.id}`}>🔍 View Details</Link>

      <div style={{ marginTop: "10px" }}>
        {!showRemove ? (
          <button onClick={addToFavorites}>❤️ Add to Favorites</button>
        ) : (
          <button onClick={onRemove} style={{ background: "red", color: "white" }}>
            🗑 Remove
          </button>
        )}
      </div>
    </div>
  );
}
