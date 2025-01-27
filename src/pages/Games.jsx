import React from "react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import { Link } from "react-router-dom";
import "../styles/main.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Import images
import dragonGameImg from "../images/dragon-game.png";
import cashMachineImg from "../images/cash-machine.jpeg";
import easyStreetImg from "../images/easy-street.png";
import cashFrenzyImg from "../images/cash.png";
import eGameImg from "../images/e-game.png";
import fireKirinImg from "../images/fire-kirin.png";
import goldenDragonImg from "../images/golden-dragon.png";
import goldenTreasureImg from "../images/g-treasure.png";
import gameRoomOnlineImg from "../images/GameRoom Online.png";
import gameVaultImg from "../images/gamevault.png";
import fabulousJuwaImg from "../images/Fabulous Juwa.png";
import gameRoomOnline1Img from "../images/GameRoom Online (1).png";
import theKrakenImg from "../images/The Kraken.png";
import luckStarsImg from "../images/Luck Stars.png";
import magicCityImg from "../images/magic-city.png";
import mwImg from "../images/MW.png";
import mrAllInOneImg from "../images/Mr all in one.png";
import orionStarImg from "../images/orion-star.png";
import pandaMasterImg from "../images/pandamaster.png";
import riversweepsImg from "../images/riversweeps.png";
import ultraPandaImg from "../images/Ultra PAnda.png";
import vblinkImg from "../images/vblink.png";
import vegasImg from "../images/vegas.png";
import vegasRollImg from "../images/vegas-roll.png";
// GameItem Component
const GameItem = ({ image, link, altText }) => {
  const [user, setUser] = useState(false);

  useEffect(() => {
    const getAuthToken = () => {
      return sessionStorage.getItem("authToken");
    };

    const token = getAuthToken();
    if (token) {
      setUser(true);
    }
  }, []);
  return (
    <div className="col-lg-2 col-md-4 col-4 mb-3 game-item">
      <div className="game-image">
        <img src={image} width="200" alt={altText} />
        <div className="play-now-overlay">
          {user ? (
            <a href={link}>
              <button className="play-now-btn">Play Now</button>
            </a>
          ) : (
            <Link to="/login">
              <button className="play-now-btn">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

// Games Component
const Games = () => {
  const games = [
    {
      image: dragonGameImg,
      link: "http://app.bluedragon777.com/",
      altText: "Dragon Game",
    },
    {
      image: cashMachineImg,
      link: "https://www.cashmachine777.com/",
      altText: "Cash Machine",
    },
    {
      image: easyStreetImg,
      link: "https://play.easystreet777.com/download/",
      altText: "Easy Street",
    },
    {
      image: cashFrenzyImg,
      link: "https://www.cashfrenzy777.com/",
      altText: "Cash Frenzy",
    },
    { image: eGameImg, link: "https://www.egame99.club/", altText: "E-Game" },
    {
      image: fireKirinImg,
      link: "http://start.firekirin.xyz:8580/",
      altText: "Fire Kirin",
    },
    {
      image: goldenDragonImg,
      link: "https://playgd.mobi/SSLobby/3488.2/web-mobile/index.html",
      altText: "Golden Dragon",
    },
    {
      image: goldenTreasureImg,
      link: "https://www.goldentreasure.mobi/",
      altText: "Golden Treasure",
    },
    {
      image: gameRoomOnlineImg,
      link: "https://www.gameroom777.com/",
      altText: "GameRoom Online",
    },
    {
      image: gameVaultImg,
      link: "https://download.gamevault999.com/",
      altText: "Game Vault",
    },
    {
      image: fabulousJuwaImg,
      link: "https://dl.juwa777.com/",
      altText: "Fabulous Juwa",
    },
    {
      image: gameRoomOnline1Img,
      link: "https://www.slots88888.com/",
      altText: "GameRoom Online 1",
    },
    {
      image: theKrakenImg,
      link: "https://getthekraken.com/index.html",
      altText: "The Kraken",
    },
    {
      image: luckStarsImg,
      link: "https://www.luckystars.games/",
      altText: "Luck Stars",
    },
    {
      image: magicCityImg,
      link: "https://www.magiccity777.com/SSLobby/m4590.2/web-mobile/index.html",
      altText: "Magic City",
    },
    { image: mwImg, link: "https://milkywayapp.xyz/", altText: "Milky Way" },
    {
      image: mrAllInOneImg,
      link: "http://www.mrallinone777.com/",
      altText: "Mr All In One",
    },
    {
      image: orionStarImg,
      link: "http://orionstars.vip:8580/index.html",
      altText: "Orion Star",
    },
    {
      image: pandaMasterImg,
      link: "https://pandamaster.vip:8888/index.html",
      altText: "Panda Master",
    },
    {
      image: riversweepsImg,
      link: "https://bet777.eu/",
      altText: "Riversweeps",
    },
    {
      image: ultraPandaImg,
      link: "https://www.ultrapanda.mobi/",
      altText: "UltraPanda",
    },
    {
      image: vblinkImg,
      link: "https://www.vblink777.club/",
      altText: "Vblink",
    },
    {
      image: vegasImg,
      link: "https://vegas-x.org/",
      altText: "Vegas",
    },
    {
      image: vegasRollImg,
      link: "http://www.vegas-roll.com/",
      altText: "Vegas Roll",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Games | Golden Ticket Online Arcade</title>
      </Helmet>
      <Header />
      <div class="games-flower"></div>

      <div className="container">
        <div className="all-games">
          <div className="row">
            <div className="col-12">
              <h3 className="text-white">Games</h3>
            </div>
            {games.map((game, index) => (
              <GameItem
                key={index}
                image={game.image}
                link={game.link}
                altText={game.altText}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Games;
