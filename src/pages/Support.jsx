import React from "react";
import { Helmet } from "react-helmet";
import "font-awesome/css/font-awesome.min.css";
import { FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/main.css";
import Header from "../components/Header";
// Import images
import footerLogo from "../images/footer-logo.png";
import uncleImage from "../images/uncle.png";
import igImage from "../images/ig.png";
import tiktokImage from "../images/tiktok.png";
import facebookImage from "../images/facebook.png";
// import cardImage from "../images/CArd (1).png";

const Support = () => {
  return (
    <div>
      <Helmet>
        <title>Support | Golden Ticket Online Arcade</title>
      </Helmet>
      <Header />
      <div class="header-image"></div>
      <div className="container">
        <div className="first-support-section text-center d-flex flex-column align-items-center justify-content-center">
          <h2 className="mb-3">Contact Golden Ticket Online Arcade & Casino</h2>
          <p className="mb-4">
            At Golden Ticket Online Arcade & Casino, we’re dedicated to
            providing a fun, safe, and enjoyable experience for all our players.
            Your feedback, questions, and concerns are important to us, and
            we’re here to assist you every step of the way.
          </p>
          <Link to="#" className="btn btn-lg">
            Reach Us
          </Link>
        </div>
      </div>
      <div className="container">
        <div className=" second-support-section">
          <div className="row">
            <div className="col-lg-12">
              <h5>How to Reach Us</h5>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="customer-support">
                  <h2>Customer Support</h2>
                  <p>
                    Have a question about your account or gameplay? Our
                    dedicated Customer Support team is available to help you.
                  </p>
                  <p>
                    <a
                      href="mailto:support@gtoarcade.com"
                      className="text-primary fw-bold"
                    >
                      support@gtoarcade.com
                    </a>
                  </p>
                  <p className="text-muted">Response within 24 hours</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="customer-support">
                  <h2>Sweepstakes Inquiries</h2>
                  <p>
                    For assistance with questions about Sweeps Coins or
                    participation in sweepstakes.
                  </p>
                  <p>
                    <a
                      href="mailto: sweeps@gtoarcade.com"
                      className="text-primary fw-bold"
                    >
                      sweeps@gtoarcade.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="customer-support">
                  <h2>Technical Support</h2>
                  <p>
                    Having technical issues or encountering bugs? Let us know so
                    we can resolve them quickly!
                  </p>
                  <p>
                    <a
                      href="mailto:info@gtoarcade.com"
                      className="text-primary fw-bold"
                    >
                      info@gtoarcade.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="customer-support">
                  <h2>General Questions</h2>
                  <p>For general inquiries or additional support.</p>
                  <p>
                    <a
                      href="mailto:info@gtoarcade.com"
                      className="text-primary fw-bold"
                    >
                      info@gtoarcade.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container">
        <div className="third-support-section mt-5">
          <div className="row">
            <div className="col-12">
              <Link to="#">
                <img
                  src={cardImage}
                  alt="Golden Ticket Arcade"
                  className="img-fluid"
                />
              </Link>
            </div>
          </div>
        </div>
      </div> */}
      <div className="container">
        <div className="seven-support-section">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-title-content">
                <h2>Mailing Address</h2>
                <p>We’re here to help and look forward to assisting you!</p>
              </div>
            </div>
            <div className="col-lg-4">
              <img
                src={uncleImage}
                alt="Uncle-Image"
                className="img-fluid w-70"
              />
            </div>
            <div className="col-lg-8">
              <div className="sweepstakes-department">
                <p className="mb-1">
                  Golden Ticket Online Arcade & Casino Sweepstakes Department
                </p>
                <p className="mb-1">930 S 4th St, Ste 209 5019</p>
                <p className="mb-0">Las Vegas, NV 89101</p>
                <div className="mt-4">
                  <a href="mailto:support@gtoarcade.com">Contact Support</a>
                  <Link to="/faqs" style={{ paddingLeft: "20px" }}>
                    Visit FAQs
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="contact-title ">
                <h4>Connect with Us on Social Media</h4>
                <p>
                  Stay updated with our latest news, games, and promotions.
                  Follow us here.
                </p>
              </div>

              <div className="col-12">
                <div className="contact-image mb-4">
                  <a
                    href="https://www.instagram.com/goldenticketonlinearcade"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={igImage} alt="Instagram" />
                  </a>
                  <a
                    href="https://tiktok.com/@GoldenTicketCasino"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={tiktokImage} alt="TikTok" />
                  </a>
                  <a
                    href="https://www.facebook.com/Goldenticketonlinearcade/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={facebookImage} alt="Facebook" />
                  </a>
                </div>
              </div>
            </div>
            <div className="box-last-img"></div>
          </div>
        </div>
      </div>

      <footer>
        <div className="ending-footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4 footer-logo col-12">
                <img src={footerLogo} alt="Footer Logo" />
              </div>
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
                    <Link to="/prizes">Prizes</Link>
                  </li>
                  <li>
                    <Link to="/games">Games</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
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
                    className="fa fa-instagram"
                    style={{ fontSize: "20px", marginRight: "10px" }}
                  ></i>
                </a>
                <a
                  href="https://www.facebook.com/Goldenticketonlinearcade/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="fa fa-facebook-square"
                    style={{ fontSize: "20px", marginRight: "10px" }}
                  ></i>
                </a>
                <a
                  href="https://tiktok.com/@GoldenTicketCasino"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTiktok style={{ fontSize: "20px", marginRight: "10px" }} />
                </a>
              </div>
              <div className="col-12">
                <div className="hr-border"></div>
              </div>
              <p
                style={{
                  fontSize: "12px",
                  color: "white",
                  textAlign: "center",
                }}
              >
                No purchase necessary. Offer not valid in restricted or
                prohibited jurisdictions. Participants must be 18+ or the age of
                majority in their respective jurisdiction. Gaming is addictive.
                Please play responsibly
              </p>
              <div className="footer-copyright">
                <div className="col-7">
                  <p>© 2024 Gtoarcade. All rights reserved for copyright</p>
                </div>
                <div className="col-5">
                  <span>
                    <Link to="/policy">Privacy policy</Link> |
                    <Link to="/terms">Terms and Conditions</Link>
                  </span>
                </div>
              </div>
              <div className="bottom-nav" style={{ display: "none" }}>
                <Link to="#menu" className="active menu-toggle">
                  <span>☰</span>
                  Menu
                </Link>
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
    </div>
  );
};

export default Support;
