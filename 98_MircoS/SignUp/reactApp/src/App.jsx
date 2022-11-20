import { useState } from "react";
import axios from 'axios';
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    await axios.post('http://localhost:4001/signup',{name,email,password});
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="usernaem"
          type="text"
          placeholder="Full Name"
          name="usernaem"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          type="email"
          placeholder="Email"
          name="email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          type="password"
          placeholder="Password"
          name="password"
        />
        <button id="submit" type="submit">
          Subbmit
        </button>
      </form>
      <script type="module" src="./app.js"></script>
    </div>
  );
}

export default App;
