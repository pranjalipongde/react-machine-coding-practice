import { useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [userErr, setUserErr] = useState(false);

  function loginHandle(e) {
    alert("Hello");
    e.preventDefault();
  }

  function getUser(e) {
    let item = e.target.value.length;
    if (item.length < 3) {
      console.warn("Invalid");
    }
    console.warn(e.target.value.length);
  }

  return (
    <div>
      <form className="form" onSubmit={loginHandle}>
        <h2>Login Form</h2>
        <input type="text" placeholder="Enter User id" onChange={getUser} />

        <input type="text" placeholder="Enter Password" />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;
