export default function Hero() {
  return (
    <main className="hero">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        alt="React Logo"
        className="react-logo"
      />

      <h1>Learn React To Expert</h1>
      <p>This is my progress learning react!</p>

      <div className="cta">
        <a href="#progress" className="primary">
          Check My Progress
        </a>
        <button className="secondary">Reference</button>
      </div>
    </main>
  );
}
