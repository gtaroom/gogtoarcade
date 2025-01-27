import React from "react";
import { Helmet } from "react-helmet";
import "../styles/style.css";
import Header from "../components/Header";
import { useState } from "react";
import bonusIcon from "../images/Bonus_icon.png";
import rewardsIcon from "../images/Rewards_icon.png";
import funIcon from "../images/fun_icon.png";
// import faqIcon from "../images/Faq_icon.png";
// import promotionIcon from "../images/promotion.png";
import starIcon from "../images/Star_icon.png";
import mail_logo from "../images/mail.png";
import coin_logo from "../images/coin.png";
import trophy_logo from "../images/trophy.png";
import bonus_logo from "../images/bonus.png";
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
          {/* <img src={promotionIcon} alt="" /> */}
        </div>

        <div className="shape">
          <img src={text_large} alt="" />
        </div>

        <div className="footer-secondsection">
          <img
            src={mail_logo}
            className="img-fluid"
            alt="Mail"
            id="mail-icon"
            title="Contact Us"
            onClick={() => showPopup("mail")}
          />
          <img
            src={coin_logo}
            className="img-fluid"
            alt="Coins"
            id="coin-icon"
            title="View Coins"
            onClick={() => showPopup("coin")}
          />
          <img
            src={trophy_logo}
            className="img-fluid"
            alt="Competitions"
            id="competition-icon"
            title="Competitions"
            onClick={() => showPopup("competition")}
          />
          <img
            src={bonus_logo}
            className="img-fluid"
            alt="Bonus"
            id="bonus-icon"
            title="Claim Your Bonus"
            onClick={() => showPopup("bonus")}
          />
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
                <p className="mt-4">Golden Ticket Online Arcade and Casino</p>
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
          <p style={{ textAlign: "center" }}>
            No purchase necessary. Offer not valid in restricted or prohibited
            jurisdictions. Participants must be 18+ or the age of majority in
            their respective jurisdiction. Gaming is addictive. Please play
            responsibly.
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
