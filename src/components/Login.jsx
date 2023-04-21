import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser, getCart } from "../apiAdapter/login&register";

const Login = (props) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [submitMessage, setSubmitMessage] = useState("");

  const [guest, setGuest] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!password || !user) {
      alert("Username and password required");
      return;
    }
    const result = await loginUser(user, password);
    console.log(result, "RESULT LOG");
    if (result.token) {
      props.handleLogin(true);
      setSubmitMessage(`Logged in as ${user}`);
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("token", result.token);
      const cart = await getCart(result.token);
      localStorage.setItem("user", user);
      localStorage.setItem("password", password);
      localStorage.setItem(`cart login ${user}`, JSON.stringify(cart));
      navigate("/");
    } else {
      alert("Error: " + result.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} id="login-form">
      <div id="text-field">
        <label className="username"></label>
        <input
          type="text"
          name="user"
          value={user}
          onChange={(event) => setUser(event.target.value)}
          placeholder="Username"
          id="text-box"
          required
        />
      </div>
      <div id="text-field">
        <label className="password"></label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Password"
          id="text-box"
          required
        />
      </div>
      {submitMessage && <p>{submitMessage}</p>}
      <button type="submit" id="submitBtn">
        Log in
      </button>
      <div>
        <Link to="/register" id="link">
          New user? Click here!
        </Link>
      </div>
    </form>
  );
};

export default Login;
