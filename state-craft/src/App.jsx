import { useState } from "react";
import UserCard from "./component/userCard";
import ClickExample from "./component/onClick";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Hello World dari ocean!</h1>
      <p>Ini adalah aplikasi React pertama saya 🚀</p>
      <UserCard />
      <ClickExample />
      <div style={{ marginTop: "24px" }}>
        <p>
          Kamu udah klik tombol: <strong>{count}</strong> kali
        </p>
        <button
          onClick={() => setCount(count + 1)}
          style={{
            padding: "12px 24px",
            fontSize: "16px",
            background: "#61dafb",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            marginTop: "12px",
          }}
        >
          +
        </button>

        <button
          onClick={() => setCount(count - 1)}
          style={{
            padding: "12px 24px",
            fontSize: "16px",
            background: "#61dafb",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            marginTop: "12px",
          }}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default App;
