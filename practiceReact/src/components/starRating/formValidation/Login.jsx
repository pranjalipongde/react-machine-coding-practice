import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="container">
      <h2>Login Form</h2>
      <form action="" className="container">
        <input type="text" placeholder="Enter your Name" />
        <input type="email" placeholder="Enter yout email" />
        <input type="password" placeholder="Enter your password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
