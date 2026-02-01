function AdvancedList() {
  const [products] = useState([
    { id: 1, name: "Laptop", category: "electronics", price: 15000000 },
    { id: 2, name: "Shirt", category: "clothing", price: 200000 },
    { id: 3, name: "Mouse", category: "electronics", price: 500000 },
    { id: 4, name: "Pants", category: "clothing", price: 300000 },
  ]);
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  // 1. Filter by search
  let filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  // 2. Filter by category
  if (category !== "all") {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === category,
    );
  }
  // 3. Sort
  filteredProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else {
      return a.price - b.price;
    }
  });
  return (
    <div>
      <input
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="all">All</option>
        <option value="electronics">Electronics</option>
        <option value="clothing">Clothing</option>
      </select>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="name">Sort by Name</option>
        <option value="price">Sort by Price</option>
      </select>
      <p>
        Showing {filteredProducts.length} of {products.length} products
      </p>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            {product.name} - Rp {product.price.toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

import { useState } from "react";
export default AdvancedList;
