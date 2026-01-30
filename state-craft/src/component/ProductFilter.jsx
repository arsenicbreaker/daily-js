function ProductFilter() {
  const [products] = useState([
    {
      id: 1,
      name: "Laptop",
      category: "electronics",
      price: 15000000,
      inStock: true,
    },
    {
      id: 2,
      name: "Shirt",
      category: "clothing",
      price: 200000,
      inStock: false,
    },
    {
      id: 3,
      name: "Mouse",
      category: "electronics",
      price: 500000,
      inStock: true,
    },
    {
      id: 4,
      name: "Pants",
      category: "clothing",
      price: 300000,
      inStock: true,
    },
  ]);
  const [filters, setFilters] = useState({
    category: "all",
    maxPrice: 20000000,
    inStockOnly: false,
  });
  const filteredProducts = products.filter((product) => {
    // Filter by category
    if (filters.category !== "all" && product.category !== filters.category) {
      return false;
    }
    // Filter by price
    if (product.price > filters.maxPrice) {
      return false;
    }
    // Filter by stock
    if (filters.inStockOnly && !product.inStock) {
      return false;
    }
    return true;
  });
  return (
    <div>
      <div>
        <select
          value={filters.category}
          onChange={(e) => setFilters({ ...filters, category: e.target.value })}
        >
          <option value="all">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
        </select>
        <input
          type="number"
          placeholder="Max Price"
          value={filters.maxPrice}
          onChange={(e) =>
            setFilters({ ...filters, maxPrice: Number(e.target.value) })
          }
        />
        <label>
          <input
            type="checkbox"
            checked={filters.inStockOnly}
            onChange={(e) =>
              setFilters({ ...filters, inStockOnly: e.target.checked })
            }
          />
          In Stock Only
        </label>
      </div>
      <p>Showing {filteredProducts.length} products</p>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            {product.name} - Rp {product.price.toLocaleString()}
            {!product.inStock && <span> (Out of Stock)</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ProductFilter;
import { useState } from "react";
