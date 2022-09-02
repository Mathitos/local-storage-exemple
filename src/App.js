import { useState, useEffect } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState("");

  const handleSubmit = async (e) => {
    // fetch auth from api
    setUser(username);
    localStorage.setItem("user", username);
  };

  useEffect(() => {
    const savedUSer = localStorage.getItem("user");
    if (savedUSer) {
      setUser(savedUSer);
    }

    const onReceiveMessage = (e) => {
      console.log(e);
      const { key, newValue } = e;
      if (key === "user") {
        setUser(newValue);
      }
      if (key === null) {
        setUser("");
        setUsername("");
      }
    };
    window.addEventListener("storage", onReceiveMessage);
    return () => {
      window.removeEventListener("storage", onReceiveMessage);
    };
  }, []);

  const handleLogout = async () => {
    setUsername("");
    setUser("");
    localStorage.clear();
  };

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
