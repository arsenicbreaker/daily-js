function ProductList({ products }) {
  if (products.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "40px" }}>
        <p>📦</p>
        <h3>No products found</h3>
        <p>Try adjusting your filters or search query</p>
      </div>
    );
  }
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
}
export default ProductList;
