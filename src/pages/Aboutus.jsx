import React from "react";
import { Helmet } from "react-helmet";

import { Link } from "react-router-dom";
import "../styles/main.css";
import Header from "../components/Header";
import item1 from "../images/item1.png";
import item2 from "../images/Group-three.png";
import item3 from "../images/item3.png";
import item4 from "../images/item4.png";
import card from "../images/CArd (2).png";
import Footer from "../components/Footer";

const Aboutus = () => {
  return (
    <div>
      <Helmet>
        <title>About Us | Golden Ticket Online Arcade</title>
      </Helmet>
      <Header />
      {/* About Us Section */}
      <div className="container">
        <div className="secondsection mt-5">
          <div className="row">
            <div className="col-lg-12 col-12 col-md-12">
              <h3>About Us</h3>
              <p>
                Welcome to Golden Ticket Online Arcade and Casino—your premier
                social sweepstakes casino, where entertainment meets
                opportunity! Enjoy exciting games, daily bonuses, and special
                promotions—all from the comfort of your home, with no purchase
                necessary. Play with Sweeps Coins for a chance to win
                cash-equivalent rewards through our sweepstakes format.
              </p>

              <p>
                Golden Ticket Online Arcade and Casino redefines social gaming
                by offering a safe, fair, and engaging environment. Play with
                Gold Coins for fun, or use Sweeps Coins to participate in
                sweepstakes for a chance to win exciting rewards. Our members
                enjoy daily and weekly bonuses, premium customer support, quick
                account setup, and an experience designed for players of all
                skill levels.
              </p>

              <p>
                We proudly bring players across the United States together
                through our innovative platform. Whether you’re here for the
                excitement of gaming, the opportunity to earn rewards, or the
                sense of community, Golden Ticket Online Arcade and Casino
                offers it all.
              </p>

              <p>
                At Golden Ticket Online Arcade and Casino, all games are free to
                enjoy—no real-money purchases are required to play or
                participate in sweepstakes. We are committed to promoting
                responsible gaming and operate in full compliance with
                sweepstakes laws.
              </p>
              <p>
                Join today to experience the best in social gaming,
                entertainment, and rewards in a supportive and fun environment!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="container">
        <div className="thirdsection">
          <div className="row">
            <div className="col-12">
              <h2>Why Choose Golden Ticket Online Arcade and Casino?</h2>
            </div>
          </div>
          <div className="items">
            <div className="row">
              <div className="col-6">
                <img src={item1} alt="Item 1" className="img-fluid" />
              </div>
              <div className="col-6 items-two">
                <img
                  src={item2}
                  alt="Item 2"
                  className="img-fluid"
                  style={{ width: "80%" }}
                />
              </div>
              <div className="col-6">
                <img src={item3} alt="Item 3" className="img-fluid" />
              </div>
              <div className="col-6">
                <img src={item4} alt="Item 4" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Registration Section */}
      <div className="container">
        <div className="forthsection">
          <div className="row">
            <div className="col-12">
              <Link to="/register">
                <img src={card} alt="Register" className="img-fluid" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Aboutus;
