import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    props.setIsLoggedIn(false);
    localStorage.clear();
    navigate("/");
    // Refresh the page to log out the user
    //window.location.reload();
  };
  return (
    <div id="navbar">
      <h2>
        <Link to="/">Home</Link>{" "}
      </h2>
      <div className="navButtonsDiv">
        {!props.isLoggedIn && (
          <React.Fragment>
            <Link to="/login">
              <button className="nav-buttons" role="button">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="nav-buttons" role="button">
                Register
              </button>
            </Link>
            <Link to="/guest">
              <button className="nav-buttons" role="button">
                Guest
              </button>
            </Link>
          </React.Fragment>
        )}
        {props.isLoggedIn && (
          <>
            <Link to="/profile" id="navLink">
              <button className="nav-buttons" role="button">
                Profile
              </button>
            </Link>
            <Link to="/cart" id="navLink">
              <button className="nav-buttons" role="button">
                Cart
              </button>
            </Link>
            <button
              className="nav-buttons"
              role="button"
              onClick={handleLogout}
            >
              Log Out
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
