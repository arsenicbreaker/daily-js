import { useState } from "react";
import "./index.css";

export default function App() {
  const [password, setPassword] = useState("");
  const [isAuth, setIsAuth] = useState(localStorage.getItem("auth") === "true");

  const CORRECT_PASSWORD = "12345";

  function handleSubmit(e) {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      localStorage.setItem("auth", "true");
      setIsAuth(true);
    } else {
      alert("Password salah ❌");
    }
  }

  function logout() {
    localStorage.removeItem("auth");
    setIsAuth(false);
    setPassword("");
  }

  if (!isAuth) {
    return (
      <div className="auth-container">
        <form className="auth-card" onSubmit={handleSubmit}>
          <h1>Welcome Back</h1>
          <p>Masukkan password untuk melanjutkan</p>

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Masuk</button>
        </form>
      </div>
    );
  }

  return <Dashboard onLogout={logout} />;
}

/* ================= DASHBOARD ================= */

const progressData = [
  { title: "React Basics", desc: "JSX · Components · Props" },
  { title: "State & Hooks", desc: "useState · useEffect" },
  { title: "UI Practice", desc: "Flexbox · Grid" },
  { title: "Mini Dashboard", desc: "Layout · Cards" },
  { title: "Form Handling", desc: "Input · Validation" },
  { title: "Local Storage", desc: "Persist Data" },
  { title: "Authentication UI", desc: "Login Flow Known" },
  { title: "Responsive Design", desc: "Mobile First" },
  { title: "Progress Section", desc: "Grid Layout" },
  { title: "Scroll Snap", desc: "Fullpage Section" },
  { title: "Clean CSS", desc: "Refactoring Styles" },
  { title: "React Portfolio", desc: "Landing Page" },
];

function Dashboard({ onLogout }) {
  return (
    <div className="page-wrapper">
      {/* ===== DASHBOARD / HERO ===== */}
      <section className="section dashboard-section">
        <header className="top-nav">
          <span className="brand">⚛ Ocean's Archive</span>
          <nav>
            <a href="#progress">Progress</a>
            <a href="#">Reference</a>
            <a href="#">Join Community</a>
            <a href="#">About Dev</a>
            <button className="logout" onClick={onLogout}>
              Logout
            </button>
          </nav>
        </header>

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
      </section>

      {/* ===== PROGRESS ===== */}
      <section id="progress" className="section progress-section">
        <h2>My Progress</h2>
        <p className="progress-subtitle">
          Track what I’ve been learning and building
        </p>

        <div className="progress-grid">
          {progressData.map((item, i) => (
            <div className="progress-card" key={i}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        <a href="/progress" className="see-all">
          See All →
        </a>
      </section>
    </div>
  );
}
