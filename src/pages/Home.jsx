import React from "react";
import { Helmet } from "react-helmet";
import "../styles/style.css";
import Header from "../components/Header";
import { useState } from "react";
import bonusIcon from "../images/Bonus_icon.png";
import rewardsIcon from "../images/Rewards_icon.png";
import funIcon from "../images/fun_icon.png";
// import faqIcon from "../images/Faq_icon.png";
import promotionIcon from "../images/promotion.png";
import starIcon from "../images/Star_icon.png";
import mail_logo from "../images/mail_icon.png";
import coin_logo from "../images/coins.png";
import trophy_logo from "../images/Trophy- icons.png";
import bonus_logo from "../images/Gift-icon.png";
import text_large from "../images/Text-large.png";
import { Link } from "react-router-dom"; // Assuming react-router-dom is used for routing

const Home = () => {
  const [activePopup, setActivePopup] = useState(null);

  const handleMenuToggle = () => {
    const nav = document.querySelector(".nav");
    const navClose = document.getElementById("nav-close");
    const navPopup = document.getElementById("nav-popup");

    if (nav) nav.classList.toggle("open");
    if (navClose) navClose.style.display = "block";
    if (navPopup) navPopup.style.visibility = "visible";
  };
  const hidePopup = () => setActivePopup(null);

  const showPopup = (popupId) => {
    console.log(`Popup to show: ${popupId}`);
    setActivePopup(popupId);
  };

  const Popup = ({ id, title, content, hidePopup }) => {
    console.log(content, title, id);

    return (
      <div className="popup-overlay" id={id}>
        <div className="row">
          <div className="col-12">
            <div className="popup">
              <div className="popup-content">
                <div className="pop-header"></div>
                <button className="close-btn" onClick={hidePopup}>
                  ×
                </button>
                <h5 className="mt-5">{title}</h5>
                {content}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <Helmet>
        <title>Welcome To Golden Ticket Online Arcade</title>
      </Helmet>
      <Header />
      <div class="banner-image"></div>
      <footer className="footer-home">
        <div className="footer-firstsection">
          <img src={bonusIcon} className="img-fluid" alt="" />
          <img src={rewardsIcon} alt="" />
          <img src={starIcon} alt="" />
          <img src={funIcon} alt="" />
          <div
            className="promotion-container"
            style={{ position: "relative", display: "inline-block" }}
          >
            <img src={promotionIcon} alt="PROMOTIONS" />
            <span
              className="promotion-text"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontSize: "12px",
                color: "black", // Adjust color as needed
                fontWeight: "700",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Optional for better visibility
              }}
            >
              HOT SPINS
            </span>
          </div>
        </div>

        <div className="shape">
          <img src={text_large} alt="" />
        </div>

        <div className="footer-secondsection">
          <div className="row text-center">
            <div className="col-6 col-md-3">
              <a href="" className="footer-link">
                <img
                  src={mail_logo}
                  className="img-fluid footer-icon"
                  alt="Mail"
                  id="mail-icon"
                  title="Contact Us"
                  onClick={() => showPopup("mail")}
                />
                <span>By Mail</span>
              </a>
            </div>
            <div className="col-6 col-md-3">
              <a href="" className="footer-link">
                <img
                  src={coin_logo}
                  className="img-fluid footer-icon"
                  alt="Coins"
                  id="coin-icon"
                  title="View Coins"
                  onClick={() => showPopup("coin")}
                />
                <span>With Gold Coins</span>
              </a>
            </div>
            <div className="col-6 col-md-3">
              <a href="" className="footer-link">
                <img
                  src={trophy_logo}
                  className="img-fluid footer-icon"
                  alt="Competitions"
                  id="competition-icon"
                  title="Competitions"
                  onClick={() => showPopup("competition")}
                />
                <span>From Competitions</span>
              </a>
            </div>
            <div className="col-6 col-md-3">
              <a href="" className="footer-link">
                <img
                  src={bonus_logo}
                  className="img-fluid footer-icon"
                  alt="Bonus"
                  id="bonus-icon"
                  title="Claim Your Bonus"
                  onClick={() => showPopup("bonus")}
                />
                <span>Daily Bonus</span>
              </a>
            </div>
          </div>
        </div>

        {activePopup === "mail" && (
          <Popup
            id="mail-popup"
            title="Request via Postal Mail"
            content={
              <>
                <p>
                  To participate without purchase, mail a handwritten request
                  including your name, address, email, and the phrase “Golden
                  Ticket Online Arcade and Casino Sweepstakes Entry” to:
                </p>
                <p className="mt-4 ptop">
                  Golden Ticket Online Arcade and Casino
                </p>
                <p className="pOne">930 S 4th St, Ste 209 5019</p>
                <p className="pTwo ">Las Vegas, NV 89101</p>
                <p className="popup-footer mt-4">
                  Limit: One request per envelope per day. Requests must be
                  legibly handwritten to qualify.
                </p>
              </>
            }
            hidePopup={hidePopup}
          />
        )}

        {activePopup === "coin" && (
          <Popup
            id="coin-popup"
            title="With Gold Coin Purchase"
            content={
              <p>
                Participants can receive Sweeps Coins as a free bonus when
                purchasing designated packs of Gold Coins. Not all Gold Coin
                packages include bonus free Sweeps Coins as part of the
                promotion.
              </p>
            }
            hidePopup={hidePopup}
          />
        )}

        {activePopup === "competition" && (
          <Popup
            id="competition-popup"
            title="From Competitions"
            content={
              <p>
                Sweeps Coins may be awarded through no-cost giveaway contests on
                Golden Ticket Online Arcade and Casino’s social media pages.
              </p>
            }
            hidePopup={hidePopup}
          />
        )}

        {activePopup === "bonus" && (
          <Popup
            id="bonus-popup"
            title="Daily Bonus"
            content={
              <p>
                Participants can claim free Sweeps Coins daily by logging into
                their Customer Account and claiming the Daily Bonus once per
                day.
              </p>
            }
            hidePopup={hidePopup}
          />
        )}

        <div className="footer-thirdsection">
          <p>Want to know more? Visit our “Rules” for more details!</p>
          <p>
            *Not all Gold Coin packages include bonus free Sweeps Coins as part
            of the promotion.
          </p>
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
          <span>
            <a href="/policy">Privacy Policy</a> |
            <a href="/social-policy">Social Responsive Rules</a> |
            <a href="/terms">Terms and Conditions</a> |
            <a href="/rules">Sweepstakes Rules</a>
          </span>
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
      </footer>
    </div>
  );
};

export default Home;
