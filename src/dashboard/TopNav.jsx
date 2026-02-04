export default function TopNav({ onLogout }) {
  return (
    <header className="top-nav">
      <span to="/" className="brand">
        ⚛ Ocean's Archive
      </span>
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
  );
}
