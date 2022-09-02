import { useState, useEffect } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState("");

  const handleSubmit = async (e) => {};

  const handleLogout = async () => {};

  if (user) {
    return (
      <div className="App">
        <p>{user} is loggged in</p>
        <button type="button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          value={username}
          placeholder="enter a username"
          onChange={({ target }) => setUsername(target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;
