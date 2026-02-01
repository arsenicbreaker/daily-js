function SortableList() {
  const [products] = useState([
    { id: 1, name: "Laptop", price: 15000000 },
    { id: 2, name: "Mouse", price: 500000 },
    { id: 3, name: "Keyboard", price: 1200000 },
  ]);
  const [sortBy, setSortBy] = useState("name"); // 'name' or 'price'
  const [sortOrder, setSortOrder] = useState("asc"); // 'asc' or 'desc'
  const sortedProducts = [...products].sort((a, b) => {
    let comparison = 0;
    if (sortBy === "name") {
      comparison = a.name.localeCompare(b.name);
    } else if (sortBy === "price") {
      comparison = a.price - b.price;
    }
    return sortOrder === "asc" ? comparison : -comparison;
  });
  return (
    <div>
      <div>
        <label>
          Sort by:
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="name">Name</option>
            <option value="price">Price</option>
          </select>
        </label>
        <label>
          Order:
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </label>
      </div>
      <ul>
        {sortedProducts.map((product) => (
          <li key={product.id}>
            {product.name} - Rp {product.price.toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

import { useState } from "react";
export default SortableList;
