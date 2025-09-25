// src/pages/PropertyDetail.jsx
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import InquiryForm from "../components/InquiryForm";
//import { InquiryForm } from "./components/InquiryForm";
import "../App.css";
const PropertyDetail = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    fetch("https://artpainting-82c83-default-rtdb.firebaseio.com/properties.json")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          const all = Object.values(data);
          const match = all.find((item) => String(item.id) === id);
          setProperty(match);
        }
      });
  }, [id]);

  if (!property) return <p>Loading...</p>;

  return (
  <div  style={{ width: "400px", margin: "20px auto", padding: "12px",}}>
    <h2>{property.title}</h2>

    {/* Main image */}
    <img
      src={property.images?.[0] || ""}
      alt={property.title}
      style={{
        width: "100%",
        height: "250px",
        objectFit: "cover",
        borderRadius: "8px",
        marginBottom: "10px",
      }}
    />

    {/* Thumbnails */}
    <div style={{ display: "flex", gap: "8px", overflowX: "auto", marginBottom: "12px" }}>
      {property.images?.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`${property.title} - ${index + 1}`}
          style={{
            width: "100px",
            height: "80px",
            objectFit: "cover",
            borderRadius: "6px",
          }}
        />
      ))}
    </div>

    <p>Type: {property.type}</p>
    <p>Price: ₹{property.price}</p>
    <p>
      🛁 {property.bathrooms} | 🛏 {property.bedrooms}
    </p>
    <p>📍 {property.location}</p>

    <InquiryForm propertyTitle={property.title} />

    <Link to="/" style={{ display: "block", marginTop: "10px" }}>
      🔙 Back
    </Link>
  </div>
);
};

export default PropertyDetail;
