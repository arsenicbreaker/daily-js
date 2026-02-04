import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./index.css";

import LoginForm from "./auth/LoginForm";
import Dashboard from "./dashboard/Dashboard";
import Progress from "./pages/Progress";

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
      <LoginForm
        password={password}
        setPassword={setPassword}
        onSubmit={handleSubmit}
      />
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Dashboard onLogout={logout} />} />
      <Route path="/progress" element={<Progress />} />
      <Route path="/refrence" element={<Navigate to="/" />} />
    </Routes>
  );
}
