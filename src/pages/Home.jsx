// src/pages/Home.jsx
import { useEffect, useState } from "react";
import { PropertyCard } from "../components/PropertyCard";
import "../App.css";
//import { PropertyCard } from "./components/PropertyCard";

const Home = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("https://artpainting-82c83-default-rtdb.firebaseio.com/properties.json")
      .then((res) => res.json())
      .then((data) => {
        if (data) setProperties(Object.values(data));
      })
      .catch((err) => alert("Error: " + err));
  }, []);

  return (
    <div  style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {properties.map((p) => (
        <PropertyCard key={p.id} property={p} />
      ))}
    </div>
  );
};

export default Home;
