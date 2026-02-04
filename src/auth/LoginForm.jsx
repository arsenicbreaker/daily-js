export default function LoginForm({
  password,
  setPassword,
  onSubmit,
}) {
  return (
    <div className="auth-container">
      <form className="auth-card" onSubmit={onSubmit}>
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
