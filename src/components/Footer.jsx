import React from "react";
import { Link } from "react-router-dom"; // Assuming react-router-dom is used for routing
import "../styles/main.css";
import footer_logo from "../images/footer-logo.png";

const Footer = () => {
  const handleMenuToggle = () => {
    const nav = document.querySelector(".nav");
    const navClose = document.getElementById("nav-close");
    const navPopup = document.getElementById("nav-popup");

    if (nav) nav.classList.toggle("open");
    if (navClose) navClose.style.display = "block";
    if (navPopup) navPopup.style.visibility = "visible";
  };

  return (
    <footer>
      {/* Top Footer Section */}
      <div className="top-footer">
        <div className="row">
          <div className="footer-top-image"></div>
        </div>
      </div>

      {/* Ending Footer Section */}
      <div className="ending-footer">
        <div className="container">
          <div className="row">
            {/* Footer Logo */}
            <div className="col-lg-4 col-md-4 footer-logo col-12">
              <img src={footer_logo} alt="Footer Logo" />
            </div>

            {/* Navigation Links */}
            <div className="col-lg-2 col-md-2 col-4">
              <h6>Navigation</h6>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/aboutus">About Us</Link>
                </li>
                <li>
                  <Link to="/rewards">Rewards</Link>
                </li>
                <li>
                  <Link to="/games">Games</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>

            {/* Sign In Links */}
            <div className="col-lg-2 col-md-2 col-4">
              <h6>Sign In</h6>
              <ul>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Create an Account</Link>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="col-lg-2 col-md-2 col-4">
              <h6>Quick Links</h6>
              <ul>
                <li>
                  <Link to="/policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms">Terms and Conditions</Link>
                </li>
                <li>
                  <Link to="/faqs">FAQs</Link>
                </li>
              </ul>
            </div>

            {/* Social Media Icons */}
            <div className="col-lg-2 col-md-2 icons">
              <a
                href="https://www.instagram.com/goldenticketonlinearcade"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fa-brands fa-instagram"
                  style={{ marginRight: "10px" }}
                ></i>
              </a>
              <a
                href="https://www.facebook.com/Goldenticketonlinearcade/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fa-brands fa-facebook"
                  style={{ marginRight: "10px" }}
                ></i>
              </a>
              <a
                href="https://tiktok.com/@GoldenTicketCasino"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fa-brands fa-tiktok"
                  style={{ marginRight: "10px" }}
                ></i>
              </a>
            </div>

            {/* Horizontal Divider */}
            <div className="col-12">
              <div className="hr-border"></div>
            </div>

            {/* Disclaimer Text */}
            <p
              style={{
                fontSize: "12px",
                color: "white",
                textAlign: "center",
              }}
            >
              No purchase necessary. Offer not valid in restricted or prohibited
              jurisdictions. Participants must be 18+ or the age of majority in
              their respective jurisdiction. Gaming is addictive. Please play
              responsibly
            </p>

            {/* Footer Copyright */}
            <div className="footer-copyright">
              <div className="col-7">
                <p>© 2024 Gtoarcade. All rights reserved for copyright</p>
              </div>
              <div className="col-5">
                <span>
                  <Link to="/policy">Privacy policy</Link> |{" "}
                  <Link to="/terms">Terms and Conditions</Link>
                </span>
              </div>
            </div>

            {/* Bottom Navigation */}
            <div className="bottom-nav" style={{ display: "none" }}>
              <a
                href="#menu"
                className="active menu-toggle"
                onClick={handleMenuToggle}
              >
                <span>☰</span>
                Menu
              </a>
              <Link to="/aboutus">
                <span>📣</span>
                Promotions
              </Link>
              <Link to="/games">
                <span>🕹️</span>
                Games
              </Link>
              <Link to="/rewards">
                <span>🎁</span>
                Rewards
              </Link>
              <Link to="/support">
                <span>💬</span>
                Community
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
