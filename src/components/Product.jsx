import { useEffect, useState } from "react";
//import { PropertyCard } from "./Components/PropertyCard"; 
import { PropertyCard } from "./components/PropertyCard";
import "../app.css";
export function Product() {
  const [product, setProduct] = useState([]);
  const [property, setProperty] = useState("All");
  const [search, setSearch] = useState("");
  const [sort, setSorted] = useState("");

  useEffect(() => {
    fetch("https://transfer-list-cd1d4-default-rtdb.firebaseio.com/.json")
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => alert(err));
  }, []);

  const filtered = product.filter((el) => {
    const sear = el.title.toLowerCase().includes(search.toLowerCase());
    const cat =
      property === "All" || el.type.toLowerCase().includes(property.toLowerCase());
    return sear && cat;
  });

  const sorting = filtered.sort((a, b) =>
    sort === "asc" ? a.price - b.price : sort === "dsc" ? b.price - a.price : 0
  );

  return (
    <>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search your product"
      />
      <select onChange={(e) => setProperty(e.target.value)}>
        <option value="All">All</option>
        <option value="apartment">Apartment</option>
        <option value="house">House</option>
        <option value="office">Office</option>
        <option value="villa">Villa</option>
      </select>
      <select onChange={(e) => setSorted(e.target.value)}>
        <option value="none">None</option>
        <option value="asc">Price: Low to High</option>
        <option value="dsc">Price: High to Low</option>
      </select>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {sorting.map((pro) => (
          <PropertyCard key={pro.id} property={pro} />
        ))}
      </div>
    </>
  );
}
