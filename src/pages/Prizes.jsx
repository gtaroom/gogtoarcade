import React from "react";
import { Helmet } from "react-helmet";

// import { Link } from "react-router-dom";
import "../styles/main.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TrophyIcon from "../images/Trophy- icon.png";
import Frame8 from "../images/Frame 8 (1).png";
import Frame15 from "../images/Frame 15.png";
// import Group from "../images/Group.png";
// import ClipPathGroup from "../images/Clip path group (1) 2.png";

const GoldenTicket = () => {
  return (
    <>
      <Helmet>
        <title>Rewards | Golden Ticket Online Arcade</title>
      </Helmet>
      <Header />
      <div class="top-image"></div>

      <div className="container">
        <div className="hero text-center d-flex flex-column align-items-center justify-content-center py-5">
          <h2 className="mb-3">Golden Ticket Rewards</h2>
          <p className="mb-4">
            Play, Participate, and Redeem Exciting Rewards!
          </p>
          {/* <a href="#" className="btn btn-lg">Play Now</a> */}
        </div>
      </div>

      <div className="container">
        <div className="price-info">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="innerDiv">
                <div className="row">
                  <div className="col-2">
                    <img src={TrophyIcon} alt="Trophy Icon" />
                  </div>
                  <div className="col-10">
                    <h2>GOLDEN TICKET REWARDS</h2>
                  </div>
                </div>
                <div className="inner-title-content">
                  <p>
                    Experience the Golden Ticket difference! Every day brings
                    something exciting at Golden Ticket Online Arcade and
                    Casino. Our free arcade-style games are designed for maximum
                    fun, but what truly sets us apart is the opportunity to
                    participate in our sweepstakes promotions and redeem
                    rewards.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="innerDivSecond">
                <div className="row">
                  <div className="col-2">
                    <img src={TrophyIcon} alt="Trophy Icon" />
                  </div>
                  <div className="col-10">
                    <h2>PLAY IN THE USA</h2>
                  </div>
                </div>
                <div className="inner-title-content-second">
                  <p>
                    Golden Ticket Online Arcade is available to players across
                    the United States, excluding jurisdictions where
                    participation is not permitted. We are committed to
                    maintaining compliance with all applicable laws to ensure a
                    safe and enjoyable gaming experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="price-third-section">
          <div className="innerDiv">
            <div className="inner-title">
              <h3>Redeem Real Rewards!</h3>
              <img src={Frame8} alt="Frame 8" />
              <p>
                Enjoy the Golden Ticket experience by playing for fun with Gold
                Coins, which have no monetary value and are designed solely for
                entertainment purposes. For Promotional Play, use Sweeps Coins,
                which can be obtained through free entry methods or as bonuses.
                Sweeps Coins can be redeemed for rewards through a secure
                process. No purchase is necessary to participate, and Sweeps
                Coins are non-purchasable and have no cash value outside of the
                sweepstakes redemption process.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="price-forth-section">
          <div className="innerDivFour">
            <div className="row">
              <div className="col-lg-5 frame col-12">
                <img src={Frame15} alt="Frame 15" />
              </div>
              <div className="col-lg-6 col-12">
                <p>
                  Your satisfaction is our priority! Our dedicated Customer
                  Support team is available 24/7 to assist you. Whether you have
                  questions or need help resolving an issue, we’re always just a
                  click away.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="price-fifth-section">
          <h3>WHY GOLDEN TICKET?</h3>
          <p>
            At Golden Ticket Online Arcade, we’re committed to delivering the
            ultimate social arcade experience. Enjoy our exciting games for
            free, designed purely for entertainment and fun.
          </p>
          <div className="innerDivFifth">
            <div className="row">
              <div className="col-lg-6">
                <div className="inner-One">
                  <p className="price-header">PLAY FOR FUN</p>
                  <p className="price-text">
                    Use Gold Coins to explore our games with no monetary value,
                    or try Promotional Play with Sweeps Coins, obtained through
                    free entry methods or bonuses. Sweeps Coins can be redeemed
                    for rewards through a secure and compliant process. No
                    purchase is necessary to participate, and Sweeps Coins have
                    no cash value outside the sweepstakes redemption process.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="inner-Two">
                  {/* <img src={ClipPathGroup} alt="Clip Path Group" /> */}
                  <p className="price-header">A CONSTANTLY EXPANDING ARCADE</p>
                  <p className="price-text">
                    We know variety keeps the fun alive! That’s why we’re always
                    adding new games to our collection. With fresh releases
                    every month, you’ll find an array of themes, features, and
                    styles to match your preferences. From bonus features and
                    multipliers to special events, there’s something for
                    everyone at Golden Ticket.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="inner-Two">
                  {/* <img src={ClipPathGroup} alt="Clip Path Group" /> */}
                  <p className="price-header">SAFE, SECURE, AND FUN</p>
                  <p className="price-text">
                    At Golden Ticket, your safety and privacy are our top
                    priorities. We’ve taken every measure to create a secure
                    environment for all players, ensuring your information
                    remains confidential and protected. Log in with confidence
                    and enjoy the games you love.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="inner-Two">
                  {/* <img src={ClipPathGroup} alt="Clip Path Group" /> */}
                  <p className="price-header">PLAY THE WAY YOU WANT</p>
                  <p className="price-text">
                    We’re here because we love gaming as much as you do! Our
                    ever-growing library of arcade-style games is designed to
                    keep you entertained. From classic themes to innovative
                    features, we offer games for everyone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="sixSection">
          <h3>A CONSTANTLY EXPANDING ARCADE</h3>
          <p>
            We know variety keeps the fun alive! That’s why we’re always adding
            new games to our collection. With fresh releases every month, you’ll
            find an array of themes, features, and styles to match your
            preferences. From bonus features and multipliers to special events
            and exclusive prizes, there’s something for everyone at Golden
            Ticket.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="sevenSection">
          <div className="row">
            <div className="col-lg-6">
              <div className="innerDiv">
                <div className="inner-title-content">
                  <img
                    src={TrophyIcon}
                    alt="Trophy Icon"
                    style={{ width: "10%" }}
                  />
                  <h3>SAFE, SECURE, AND FUN</h3>
                  <p>
                    At Golden Ticket, your safety and privacy are our top
                    priorities. We’ve taken every measure to create a secure
                    environment for all players, ensuring your information
                    remains confidential and protected. Log in with confidence
                    and enjoy the games you love.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="innerDiv last-div">
                <div className="inner-title-content-second">
                  <img
                    src={TrophyIcon}
                    alt="Trophy Icon"
                    style={{ width: "10%" }}
                  />
                  <h3>PLAY THE WAY YOU WANT</h3>
                  <p>
                    We’re here because we love gaming as much as you do! Our
                    ever-growing library of arcade-style games is designed to
                    keep you entertained. From classic themes to innovative
                    features, we offer games for everyone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GoldenTicket;
