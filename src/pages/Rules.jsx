import React from "react";
import { Helmet } from "react-helmet";

import "../styles/main.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Rules = () => {
  return (
    <>
      <Helmet>
        <title>Rules | Golden Ticket Online Arcade</title>
      </Helmet>
      <Header />
      <div class="top-image"></div>
      <div className="container">
        <div className="policy">
          <h1>
            Golden Ticket Online Arcade and Casino Official Sweepstakes Rules
          </h1>
          <p>
            Welcome to Golden Ticket Arcade! By participating in our
            sweepstakes, promotions, and games, you agree to abide by the rules,
            terms, and policies outlined below.
          </p>

          <h2>No Purchase or Payment Necessary to Participate</h2>
          <ul>
            <li>
              A PURCHASE OR PAYMENT OF ANY KIND WILL NOT INCREASE YOUR CHANCES
              OF WINNING.
            </li>
            <li>
              Golden Ticket Online Arcade and Casino is an online platform
              designed for entertainment and enjoyment, offering participants
              the opportunity to play games. Golden Ticket also provides
              Sweepstakes entries, referred to as “Golden Coins,” as outlined in
              these Sweepstakes Rules. Golden Coins can be used to participate
              in Promotional Play for a chance to win additional Golden Coins,
              which are redeemable for real prizes.
            </li>
            <li>
              GOLDEN COINS ARE SUBJECT TO A MINIMUM PRIZE REDEMPTION THRESHOLD
              OF US $40. AMOUNTS BELOW THIS THRESHOLD ARE NOT ELIGIBLE FOR PRIZE
              REDEMPTION.
            </li>
          </ul>

          <h2>Rules for Prizes, Promotions, and Bonuses</h2>
          <ol>
            <li>
              <strong>No Purchase Necessary:</strong> Participation in
              promotions, competitions, and bonuses does not require any
              purchase. Players have the option to enter for free using our
              alternative entry methods.
            </li>
            <li>
              <strong>Free Entry Methods:</strong> Eligible participants may
              collect Sweeps Coins and enter the Sweepstakes in the following
              ways:
              <ul>
                <li>
                  Sweepstakes Entries: Eligible participants may collect Sweeps
                  Coins and enter the Sweepstakes in the following ways.
                </li>
                <li>
                  Purchase Gold Coins with Sweeps Coins as a Bonus: Participants
                  can receive Sweeps Coins as a free bonus when purchasing
                  designated packs of Gold Coins.
                </li>
                <li>
                  Virtual Coins Usage: Virtual coins are a means to access
                  gameplay and are not a form of payment or currency.
                </li>
                <li>
                  Participate in Social Media Giveaways: Sweeps Coins may be
                  awarded through no-cost giveaway contests on Golden Ticket
                  Online Arcade and Casino’s social media pages.
                </li>
                <li>
                  Daily Login Bonus: Participants can claim free Sweeps Coins
                  daily by logging into their Customer Account and claiming the
                  Daily Bonus once per day.
                </li>
                <li>
                  Request via Postal Mail: Participants can submit a handwritten
                  postal request to receive free Sweeps Coins (details provided
                  in the full rules).
                </li>
              </ul>
            </li>
          </ol>

          <h2>Refund Policy</h2>
          <ul>
            <li>
              <strong>Virtual Currency Purchases:</strong> All purchases of
              virtual currency, tokens, or credits within our platform are final
              and non-refundable.
            </li>
            <li>
              <strong>Refund Exceptions:</strong> Refunds may only be issued in
              cases of proven unauthorized or accidental transactions. Refund
              requests must be submitted within 7 days.
            </li>
            <li>
              <strong>Ineligible Refund Requests:</strong> Refunds will not be
              provided for dissatisfaction with gameplay or lost virtual
              currency.
            </li>
          </ul>

          <h2>Contact Information</h2>
          <ul>
            <li>Golden Ticket Online Arcade and Casino</li>
            <li>930 S 4th St, Ste 209 5019</li>
            <li>Las Vegas, NV</li>
            <li>Email: support@gtoarcade.com</li>
            <li>Phone: 833-925-5224</li>
          </ul>

          <h2>Self-Exclusion and Gambling Help Disclaimer</h2>
          <ul>
            <li>
              At GTOA, we are committed to providing a safe and enjoyable
              experience for all our users. While our platform is designed for
              entertainment purposes and operates within the sweepstakes model,
              we understand that some individuals may need support in managing
              their gameplay habits.
            </li>
            <li>
              <strong>Self-Exclusion Policy:</strong> If you feel that your use
              of GTOA is impacting your well-being, we encourage you to take
              advantage of our self-exclusion program.
            </li>
            <li>
              <strong>What Happens During Self-Exclusion:</strong> Your access
              to the platform will be restricted for the duration of the
              self-exclusion period.
            </li>
            <li>
              <strong>How to Activate Self-Exclusion:</strong> Contact us at
              support@gtoarcade.com with your request for self-exclusion.
            </li>
            <li>
              <strong>Enforcement:</strong> While we take reasonable steps to
              enforce self-exclusion, it is your responsibility to avoid
              attempting to access the platform during the exclusion period.
            </li>
          </ul>

          <p>Last Updated: December 30, 2025</p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Rules;
