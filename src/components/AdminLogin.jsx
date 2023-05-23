import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { adminLogin } from "../apiAdapter/admin";

const AdminLogin = (props) => {
  const [adminUser, setAdminUser] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [submitMessage, setSubmitMessage] = useState("");
  const navigate = useNavigate();

  console.log(props, "PROPS LOG");

  const handleAdminLogin = async (event) => {
    event.preventDefault();
    try {
      const result = await adminLogin(adminUser, adminPassword);
      if (result.token) {
        props.setIsAdminLoggedIn(true); // Update admin login state
        localStorage.setItem("admin", adminUser);
        localStorage.setItem("token", result.token);
        navigate("/admin"); // Navigate to the admin page
      } else {
        alert("Invalid admin credentials");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred during admin login");
    }
  };

  return (
    <div className="admin">
      {props.isAdminLoggedIn ? (
        <h1 id="admin-hello">
          You've reached the Admin Page, click a button to begin
        </h1>
      ) : (
        <form onSubmit={handleAdminLogin}>
          <h1>Login as admin</h1>
          <div id="text-field">
            <label className="username"></label>
            <input
              type="text"
              name="adminUser"
              value={adminUser}
              onChange={(event) => setAdminUser(event.target.value)}
              placeholder="Admin Username"
              id="text-box"
              required
            />
          </div>
          <div id="text-field">
            <label className="password"></label>
            <input
              type="password"
              name="adminPassword"
              value={adminPassword}
              onChange={(event) => setAdminPassword(event.target.value)}
              placeholder="Admin Password"
              id="text-box"
              required
            />
          </div>
          {submitMessage && <p>{submitMessage}</p>}
          <button type="submit" id="submitBtn">
            Log in as Admin
          </button>
        </form>
      )}
    </div>
  );
};

export default AdminLogin;
