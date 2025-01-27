import React from "react";
import { Helmet } from "react-helmet";

import "../styles/main.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const FAQ = () => {
  return (
    <>
      <Helmet>
        <title>FAQs | Golden Ticket Online Arcade</title>
      </Helmet>
      <Header />
      <div class="top-image"></div>
      <div className="container">
        <div className="faq">
          <div className=" text-center d-flex flex-column align-items-center justify-content-center py-5">
            <h1 className="mb-3">
              FAQs - Golden Ticket Online Arcade and Casino
            </h1>
          </div>
          <div className="faq-item">
            <h2>1. What is Golden Ticket Online Arcade and Casino?</h2>
            <p>
              Golden Ticket Online Arcade and Casino is a sweepstakes social
              casino where you can enjoy exciting games, participate in
              sweepstakes, and have a chance to win rewards—all while playing
              for fun.
            </p>
          </div>
          <div className="faq-item">
            <h2>2. Is Golden Ticket Online Arcade and Casino free to play?</h2>
            <p>
              Yes! Golden Ticket offers free-to-play games. You can earn virtual
              coins and sweepstakes entries without any purchase.
            </p>
          </div>
          <div className="faq-item">
            <h2>3. How does Golden Ticket work?</h2>
            <p>
              You play casino-style games using virtual currency, which can be
              earned for free. Some virtual currency may qualify for sweepstakes
              entries, providing an opportunity to win rewards.
            </p>
          </div>
          <div className="faq-item">
            <h2>4. Can I play without creating an account?</h2>
            <p>
              An account is required to save your progress, participate in
              sweepstakes, and access exclusive features.
            </p>
          </div>
          <div className="faq-item">
            <h2>5. What types of games are available on Golden Ticket?</h2>
            <p>
              We offer a variety of games, including slots, table games, and
              other classic casino-style experiences, all optimized for
              entertainment and engagement.
            </p>
          </div>
          <div className="faq-item">
            <h2>6. Can I play Golden Ticket on my mobile device?</h2>
            <p>
              Yes, Golden Ticket is fully compatible with both desktop and
              mobile devices.
            </p>
          </div>
          <div className="faq-item">
            <h2>
              7. Are Golden Ticket’s games hosted directly on the website?
            </h2>
            <p>
              Golden Ticket Online Arcade and Casino provides access to
              third-party games hosted on external platforms. When you play, you
              may be redirected to a third-party website. Rest assured, these
              games are carefully selected and comply with our standards for
              quality and fairness.
            </p>
          </div>
          <div className="faq-item">
            <h2>8. What are sweepstakes entries?</h2>
            <p>
              Sweepstakes entries are earned by participating in eligible
              activities and can be used for a chance to win rewards.
            </p>
          </div>
          <div className="faq-item">
            <h2>9. How do I participate in sweepstakes?</h2>
            <p>
              Sweepstakes entries can be earned through gameplay or by following
              the free entry instructions provided on the website.
            </p>
          </div>
          <div className="faq-item">
            <h2>10. Do I need to buy anything to play?</h2>
            <p>
              No purchases are necessary to play or participate in sweepstakes.
              However, optional purchases may enhance your gameplay experience.
            </p>
          </div>
          <div className="faq-item">
            <h2>11. Are purchases refundable?</h2>
            <p>
              All purchases are final. Please refer to our Terms of Service for
              more details.
            </p>
          </div>
          <div className="faq-item">
            <h2>12. What should I do if I encounter a problem?</h2>
            <p>
              If you experience any issues, contact our support team via the
              “Support” section or email us at{" "}
              <a href="mailto:support@gtoarcade.com">support@gtoarcade.com</a>.
            </p>
          </div>
          <div className="faq-item">
            <h2>13. Is Golden Ticket available in my country?</h2>
            <p>
              Golden Ticket is available in the US (excluding Washington,
              Michigan, Montana, Connecticut, and Idaho).
            </p>
          </div>
          <div className="faq-item">
            <h2>14. How old do I need to be to play?</h2>
            <p>
              You must be at least 18 years old (or the age of majority in your
              jurisdiction) to play on Golden Ticket.
            </p>
          </div>
          <div className="faq-item">
            <h2>15. How do you ensure compliance with sweepstakes laws?</h2>
            <p>
              We operate in strict accordance with all applicable sweepstakes
              laws and regulations to ensure a safe and legally compliant gaming
              experience.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FAQ;
