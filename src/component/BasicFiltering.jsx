function ProductList() {
  const [products] = useState([
    { id: 1, name: "Laptop", category: "electronics", price: 15000000 },
    { id: 2, name: "Shirt", category: "clothing", price: 200000 },
    { id: 3, name: "Mouse", category: "electronics", price: 500000 },
  ]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);
  return (
    <div>
      <div>
        <button onClick={() => setSelectedCategory("all")}>All</button>
        <button onClick={() => setSelectedCategory("electronics")}>
          Electronics
        </button>
        <button onClick={() => setSelectedCategory("clothing")}>
          Clothing
        </button>
      </div>
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
export default ProductList;
import { useState } from "react";
