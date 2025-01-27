import React, { useState, useEffect } from "react";
import "../styles/style.css";
import logo from "../images/LOGO.png";
import axios from "axios"; // Import axios

const Header = () => {
  // Simulate authentication state (you can replace this with actual state)
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Change this based on actual user auth status
  const [isLoaded, setIsLoaded] = useState(false);

  // Function to hide popup menu
  const hidePopupMenu = () => {
    const navPopup = document.getElementById("nav-popup");
    if (navPopup) {
      navPopup.style.visibility = "hidden";
    }
  };

  const handleLogout = async (e) => {
    e.preventDefault(); // Prevent default anchor behavior

    const getAuthToken = () => {
      return sessionStorage.getItem("authToken");
    };

    const token = getAuthToken();

    try {
      // Call the logout API
      const response = await axios.post(
        "https://app-66277c84-d088-402a-98d3-330f9d662bbd.cleverapps.io/api/logout",
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        // Clear sessionStorage (or localStorage if you use that for storing the token)
        sessionStorage.removeItem("authToken");

        // Redirect to the homepage
        window.location.href = "/"; // or use React Router's useHistory() if you are using React Router
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Error during logout:", error.response?.data);
    }
  };

  useEffect(() => {
    const getAuthToken = () => {
      return sessionStorage.getItem("authToken");
    };

    const token = getAuthToken();
    if (token) {
      setIsAuthenticated(true);
    }
    // Simulate loading process (replace with your actual loading logic)
    const timer = setTimeout(() => {
      setIsLoaded(true); // Set the content as loaded after a delay
    }, 2000); // Adjust this delay as per your loading time

    // Cleanup timeout if component is unmounted
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* Preloader */}
      {!isLoaded && (
        <div id="preloader">
          <div className="loader"></div>
        </div>
      )}
      <div className="container">
        <header className="header">
          <img src={logo} alt="Golden Ticket Logo" className="logo" />

          {/* Header Buttons */}
          <div className="header-button" style={{ display: "none" }}>
            {isAuthenticated ? (
              <>
                <a
                  className="header-btn1"
                  href="/logout"
                  onClick={handleLogout}
                >
                  Logout
                </a>
                <a className="header-btn2" href="/profile">
                  My Account
                </a>
              </>
            ) : (
              <>
                <a className="header-btn1" href="/login">
                  Login
                </a>
                <a className="header-btn2" href="/register">
                  Create Account
                </a>
              </>
            )}
          </div>

          {/* Navigation */}
          <nav className="nav" id="nav-popup">
            <ul>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/aboutus">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/rewards">
                  Rewards
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/games">
                  Games
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/support">
                  Support
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/terms">
                  Terms and Conditions
                </a>
              </li>

              {/* Authenticated User Buttons */}
              {isAuthenticated ? (
                <li className="nav-button">
                  <a className="btn" href="/logout" onClick={handleLogout}>
                    Logout
                  </a>
                  <a className="btn-orange" href="/profile">
                    My Account
                  </a>
                </li>
              ) : (
                <li className="nav-button">
                  <a className="btn" href="/login">
                    Login
                  </a>
                  <a className="btn-orange" href="/register">
                    Register
                  </a>
                </li>
              )}

              {/* Close Button */}
              <li className="nav-item">
                <button
                  id="nav-close"
                  onClick={hidePopupMenu}
                  style={{ display: "none" }}
                >
                  X
                </button>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Header;
