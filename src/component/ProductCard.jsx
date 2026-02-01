function ProductCard(props) {
  return (
    <div className="product-card">
      <img src={props.image} alt={props.name} />
      <h3>{props.name}</h3>
      <p className="price">Rp {props.price.toLocaleString()}</p>
      <p className="description">{props.description}</p>
      <button>Add to Cart</button>
    </div>
  );
}
// Usage
function Product() {
  return (
    <div>
      <ProductCard
        image="laptop.jpg"
        name="Laptop Gaming ASUS"
        price={15000000}
        description="Laptop gaming dengan performa tinggi"
      />
      <ProductCard
        image="mouse.jpg"
        name="Logitech Mouse"
        price={500000}
        description="Mouse wireless ergonomis"
      />
    </div>
  );
}

export default Product