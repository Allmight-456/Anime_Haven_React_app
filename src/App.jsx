//ignore components folder
//no use of that as sign In or SignUp page is not utilized

import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.css";

const App = () => {
  const menutoggle = () => {
    const MenuItems = document.getElementById("MenuItems");
    if (MenuItems.style.maxHeight === "0px") {
      MenuItems.style.maxHeight = "200px";
    } else {
      MenuItems.style.maxHeight = "0px";
    }
  };

  return (
    <div>
      <div className="header">
        <div className="container">
          <div className="navbar">
            <div className="logo">
              <a href="https://www.youtube.com/@MuseAsia">
                <img
                  src="/img/Screenshot 2023-04-09 151554.png"
                  width="155px"
                  alt="Logo"
                />
              </a>
            </div>
            <Router>
              <nav>
                <ul id="MenuItems">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <a href="https://www.netflix.com/in/browse/genre/7424">
                      Recommendation
                    </a>
                  </li>
                  <li>
                    <a href="https://reelrundown.com/animation/Anime-Genre-List">
                      Genres
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/KissAnime_Gallery">Must Watch</a>
                  </li>
                  <li>
                    <a href="https://t.me/Kissanime_Seasonal">Upcoming</a>
                  </li>
                </ul>
              </nav>
            </Router>
            <a href="https://www.youtube.com/@AniOneAsia">
              <img
                src="/img/seach_icon.png"
                className="menu-icon"
                onClick={menutoggle}
                alt="Search"
              />
            </a>
          </div>

          <div className="row">
            <div className="hey-1">
              <h1>
                This season's gonna be <br />
                Humoungous!
              </h1>
              <p>
                Demon Slayer season 2<br /> The Sworsmith Village Arc
              </p>
              <a
                href="https://www.netflix.com/in/title/81091393"
                className="btn"
              >
                Watch Now &#8594;
              </a>
            </div>
            <div className="hey-1">
              <a href="https://www.netflix.com/title/80180849">
                <img
                  src="/img/WhatsApp Image 2023-01-18 at 10.59.59 PM.jpeg"
                  alt="Demon Slayer"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="categories">
        <div className="small-container">
          <div className="translateY-[-10px]">
            <div className="row">
              <div className="hey-3">
                <a href="https://www.youtube.com/watch?v=eqy85AL70PU">
                  <img
                    src="img/WhatsApp Image 2023-01-18 at 11.00.00 PM.jpeg"
                    alt="Solo Levelling / Netflix"
                  />
                  <br />
                  <h3>Solo Levelling / Netflix</h3>
                </a>
              </div>
              <div className="hey-3">
                <a href="https://www.netflix.com/in/title/81511410">
                  <img
                    src="img/WhatsApp Image 2023-01-18 at 10.59.59 PM (1).jpeg"
                    alt="SPY X FAMILY / Netflix"
                  />
                  <br />
                  <h3>SPY X FAMILY / Netflix</h3>
                </a>
              </div>
              <div className="hey-3">
                <a href="https://www.netflix.com/in/title/80988066">
                  <img
                    src="img/WhatsApp Image 2023-01-18 at 10.59.59 PM (2).jpeg"
                    alt="Hellsing Ultimate / Netflix"
                  />
                  <br />
                  <h3>Hellsing Ultimate / Netflix</h3>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Anime Section */}
      <div className="small-container">
        <h2 className="title">Featured Anime</h2>
        <div className="row">
          <div className="hey-4">
            <a href="https://www.netflix.com/search?q=BLACK%20CLOVER&jbv=80238012">
              <img src="img/black_clover.jpe" alt="Black Clover" />
            </a>
            <a href="https://www.netflix.com/search?q=BLACK%20CLOVER&jbv=80238012">
              <h4>Black Clover</h4>
            </a>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-"></i>
              <i className="fa fa-star-o"></i>
            </div>
            <p>Netflix/Crunchyroll</p>
          </div>
          <div className="hey-4">
            <a href="https://www.netflix.com/watch/81685140?trackId=255824129&tctx=0%2C3%2CNAPA%40%40%7Cee94a1dd-9c2a-47a5-a16f-ac3070c36a7e-219143726_titles%2F1%2F%2Fblack%20clover%2F0%2F0%2CNAPA%40%40%7Cee94a1dd-9c2a-47a5-a16f-ac3070c36a7e-219143726_titles%2F1%2F%2Fblack%20clover%2F0%2F0%2C%2C%2Cee94a1dd-9c2a-47a5-a16f-ac3070c36a7e-219143726%7C1%2C%2C81091393%2CVideo%3A81091393%2CdetailsPageEpisodePlayButton">
              <img src="img/DEMON_SLAYER_S3.jpg" alt="DEMON SLAYER SEASON 2" />
            </a>
            <a href="https://www.netflix.com/watch/81685140?trackId=255824129&tctx=0%2C3%2CNAPA%40%40%7Cee94a1dd-9c2a-47a5-a16f-ac3070c36a7e-219143726_titles%2F1%2F%2Fblack%20clover%2F0%2F0%2CNAPA%40%40%7Cee94a1dd-9c2a-47a5-a16f-ac3070c36a7e-219143726_titles%2F1%2F%2Fblack%20clover%2F0%2F0%2C%2C%2Cee94a1dd-9c2a-47a5-a16f-ac3070c36a7e-219143726%7C1%2C%2C81091393%2CVideo%3A81091393%2CdetailsPageEpisodePlayButton">
              <h4>DEMON SLAYER SEASON 2</h4>
            </a>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half-o"></i>
            </div>
            <p>Netflix</p>
          </div>
          <div className="hey-4">
            <a href="https://www.netflix.com/search?q=VINLAND%20SAGA&jbv=81249833">
              <img src="img/VINLAND_SAGA (2).jpg" alt="Vinland Saga" />
            </a>
            <a href="https://www.netflix.com/search?q=VINLAND%20SAGA&jbv=81249833">
              <h4>Vinland Saga</h4>
            </a>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
            </div>
            <p>Netflix</p>
          </div>
          <div className="hey-4">
            <a href="https://www.netflix.com/search?q=BLUE%20LOCK&jbv=81640753">
              <img src="img/BLUELOCK.jpg" alt="Blue Lock" />
            </a>
            <a href="https://www.netflix.com/search?q=BLUE%20LOCK&jbv=81640753">
              <h4>Blue Lock</h4>
            </a>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
            </div>
            <p>Netflix</p>
          </div>
        </div>
      </div>

      {/* Ongoing Anime Section */}
      <div className="small-container">
        <h2 className="title">Ongoing Anime</h2>
        <div className="row">
          <div className="hey-4">
            <a href="https://www.youtube.com/playlist?list=PLpm1VVK4UL15OT-nLEQsG_0Ri6Pgy3PCe">
              <img
                src="img/slime_anime.jpg"
                alt="That time when I got reincarnated as a Slime"
              />
            </a>
            <a href="https://www.youtube.com/playlist?list=PLpm1VVK4UL15OT-nLEQsG_0Ri6Pgy3PCe">
              <h4>That time when I got reincarnated as a Slime</h4>
            </a>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-"></i>
              <i className="fa fa-star-o"></i>
            </div>
            <p>YouTube / Netflix</p>
          </div>
          <div className="hey-4">
            <a href="https://www.youtube.com/results?search_query=dead+mount+death+play+">
              <img src="img/death_mount(1).jpg" alt="Death Mount Death Play" />
            </a>
            <h4>Death Mount Death Play</h4>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half-o"></i>
            </div>
            <p>Muse Asia (YouTube)</p>
          </div>
          <div className="hey-4">
            <a href="https://t.me/Kissanime_Seasonal">
              <img
                src="img/i_got_a_cheat_skill.jpg"
                alt="I got Cheat skill and Became Unrivaled in Real World"
              />
            </a>
            <h4>I got Cheat skill and Became Unrivaled in Real World</h4>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
            </div>
            <p>YouTube</p>
          </div>
          <div className="hey-4">
            <a href="https://t.me/AnimeMedia123">
              <img src="img/ATTACK_ON_TITAN.jpg" alt="Attack On Titan" />
            </a>
            <a href="https://t.me/AnimeMedia123">
              <h4>Attack On Titan</h4>
            </a>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
            </div>
            <p>Crunchyroll / Telegram</p>
          </div>
          <div className="row">
            <div className="hey-4">
              <a href="https://www.netflix.com/search?q=BLUE%20PERIOD&jbv=81318842">
                <img src="img/BLUE_PERIOD.jpg" alt="Blue Period" />
              </a>
              <a href="https://www.netflix.com/search?q=BLUE%20PERIOD&jbv=81318842">
                <h4>Blue Period</h4>
              </a>
              <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-"></i>
                <i className="fa fa-star-o"></i>
              </div>
              <p>Netflix</p>
            </div>
            <div className="hey-4">
              <a href="https://www.netflix.com/search?q=dEATH%20NOTE&jbv=70204970">
                <img src="img/DEATH_NOTE.jpg" alt="Death Note" />
              </a>
              <a href="https://www.netflix.com/search?q=dEATH%20NOTE&jbv=70204970">
                <h4>Death Note</h4>
              </a>
              <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half-o"></i>
              </div>
              <p>Netflix</p>
            </div>
            <div className="hey-4">
              <a href="https://www.netflix.com/search?q=MONSTER&jbv=81409869">
                <img src="img/monster_anime.jpg" alt="Monster" />
              </a>
              <a href="https://www.netflix.com/search?q=MONSTER&jbv=81409869">
                <h4>Monster</h4>
              </a>
              <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-o"></i>
              </div>
              <p>Netflix</p>
            </div>
            <div className="hey-4">
              <img src="img/PARASYTE.jpg" alt="Parasyte" />
              <a href="https://www.netflix.com/search?q=PARASYTE&jbv=80191008">
                <h4>Parasyte</h4>
              </a>
              <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-o"></i>
              </div>
              <p>Netflix / Telegram</p>
            </div>
          </div>
        </div>
      </div>

      {/* Offer Section */}
      <div className="offer">
        <div className="small-container">
          <div className="row">
            <div className="hey-1">
              <img
                src="/img/JUJUTSU_KAISEN.jpg"
                className="offer-img"
                alt="Jujutsu Kaisen"
              />
            </div>
            <div className="hey-1">
              <p>Exclusives from MAPPA</p>
              <h1>Jujutsu Kaisen season 2</h1>
              <a
                href="https://www.netflix.com/search?q=jujutsu%20kaisen&jbv=81278456"
                className="btn"
              >
                Stream now on Netflix &#8594;
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col-1">
              <h3>Download Our App</h3>
              <p>
                Download App <br />
                <a href="https://play.google.com/store/apps">Android</a> <br />
                <a href="https://www.apple.com/in/app-store/">iOS</a>
              </p>
            </div>
            <div className="footer-col-2">
              <img src="img/Screenshot 2023-04-09 151554.png" alt="Our App" />
              <p>
                We are committed to the anime community.
                <br />
                We in no way spread piracy or are involved <br />
                in any copyright infringement.
              </p>
            </div>
            <div className="footer-col-3">
              <h3>Useful Links</h3>
              <ul>
                <li>
                  Merchandise <br />
                  Discord Community
                </li>
                <li>
                  Licenses <br />
                  Join Us
                </li>
              </ul>
            </div>
            <div className="footer-col-4">
              <h3>Follow us</h3>
              <ul>
                <li>
                  Facebook <br />
                  Instagram
                </li>
                <li>
                  Twitter <br />
                  YouTube
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default App;
