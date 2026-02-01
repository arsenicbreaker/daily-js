function LoginForm() {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Ambil data dari form
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");

    console.log({ username, password });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="username" name="username" required />
      <input type="password" name="password" required />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm