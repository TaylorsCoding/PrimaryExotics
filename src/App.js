import "./App.css";

import logo from "./images/logo.png";
import hamburger from "./images/hamburger.png";
import ferrariLogo from "./images/ferrarilogo.png";
import bentleyLogo from "./images/bentleylogo.jpg";
import porscheLogo from "./images/porschelogo.jpeg";
import mclarenLogo from "./images/mclarenlogo.png";
import lambLogo from "./images/lamblogo.svg";
import redPorsche from "./images/redporsche.jpg";
import whiteMclaren from "./images/whitemclaren.jpg";
import greyLamb from "./images/greylamb.jpg";
import whiteMclaren1 from "./images/whitemclaren1.jpg";
import redMclaren from "./images/redmclaren.jpg";
import neonPorsche from "./images/neonporsche.jpg";
import silverLamb from "./images/silverlamb.jpg";
import whiteAston from "./images/whiteastonmartin.jpg";
import redFerrari from "./images/redferrari.jpg";
import listPic from "./images/list.png";
import carPic from "./images/car.png";
import pricePic from "./images/price.png";
import handPic from "./images/hand.png";

function App() {
  const handleCollapseClick = () => {
    const navbar = document.getElementById("header-navbar-mobile-list");
    if (navbar.style.display === "block") {
      navbar.style.display = "none";
    } else {
      navbar.style.display = "block";
    }
  };

  return (
    <div id="app-container">
      <main>
        <section id="sect1">
          <header>
            <nav id="header-navbar-mobile">
              <img id="header-navbar-mobile-logo" src={logo} />
              <img
                id="header-navbar-mobile-collapse"
                onClick={handleCollapseClick}
                src={hamburger}
              />
            </nav>
            <nav id="header-navbar-desktop">
              <img id="header-navbar-desktop-logo" src={logo} />
              <ul id="header-navbar-desktop-list">
                <li className="header-listitems">Home</li>
                <li className="header-listitems">About Us</li>
                <li className="header-listitems">Cars For Sale</li>
                <li className="header-listitems">Pricing</li>
                <li className="header-listitems">Contact</li>
                <li id="header-navbar-desktop-list-login">Log In</li>
                <li id="header-navbar-desktop-list-signup">Sign Up</li>
              </ul>
            </nav>
          </header>
          <ul id="header-navbar-mobile-list">
            <li>Primary Exotics</li>
            <li>Home</li>
            <li>About Us</li>
            <li>Cars For Sale</li>
            <li>Pricing</li>
            <li>Contact</li>
            <li>Log In</li>
            <li>Sign Up</li>
          </ul>
          <div id="sect1-title">
            <span id="sect1-title-text">PREMIUM AUTO EXCHANGE</span>
          </div>
          <div id="sect1-subtitle">
            <span id="sect1-subtitle-text">
              Primary Exotics brings a secure new platform for you to buy or
              sell your exotic car.
            </span>
          </div>
          <div id="sect1-buttons">
            <div id="sect1-button1">BUY A CAR</div>
            <div id="sect1-button2">SELL A CAR</div>
          </div>
        </section>
        <section id="sect2">
          <div id="sect2-first">
            <div id="sect2-first-title">
              <span id="sect2-first-title-text">FIND YOUR NEXT LUXURY CAR</span>
            </div>
            <form id="sect2-first-form">
              <select id="sect2-first-form-year" name="sect2-first-form-year">
                <option disabled selected default>
                  Year
                </option>
                <option value="2020">2020</option>
              </select>
              <select>
                <option>Choose Make</option>
                <option value="Acura">Acura</option>
              </select>
              <select>
                <option>Choose Model</option>
                <option value="Acura">NSX</option>
              </select>
              <input type="text" placeholder="Enter a location" />
              <input type="submit" value="Search" />
            </form>
          </div>
          <div id="sect2-second">
            <div id="sect2-second-title">
              <span id="sect2-second-title-text">BROWSE BY MAKE</span>
            </div>
            <div id="sect2-second-buttons">
              <div id="sect2-second-buttons-r1">
                <img src={ferrariLogo} alt="Ferrari Logo" />
                <img src={bentleyLogo} alt="Bentley Logo" />
                <img src={porscheLogo} alt="Porsche Logo" />
              </div>
              <div id="sect2-second-buttons-r2">
                <img src={mclarenLogo} alt="McLaren Logo" />
                <img src={lambLogo} alt="Lamborghini Logo" />
                <div>MORE ></div>
              </div>
            </div>
          </div>
        </section>
        <section id="sect3">
          <div id="sect3-title">
            <span id="sect3-title-text">FEATURED LISTINGS</span>
          </div>
          <div id="sect3-cars">
            <div id="sect3-cars-r1">
              <div className="sect3-cars-col" id="sect3-cars-r1-c1">
                <img src={redPorsche} alt="Red Porsche" />
                <div>$189,900</div>
                <div id="sect3-cars-r1-c1-name">
                  <span id="sect3-cars-r1-c1-name-text">
                    2018 Porsche 911 GT3 Touring
                  </span>
                </div>
              </div>
              <div className="sect3-cars-col" id="sect3-cars-r1-c2">
                <img src={whiteMclaren} alt="White McLaren" />
                <div>$149,900</div>
                <div id="sect3-cars-r1-c2-name">
                  <span id="sect3-cars-r1-c2-name-text">
                    2015 McLaren 650S Coupe
                  </span>
                </div>
              </div>
              <div className="sect3-cars-col" id="sect3-cars-r1-c3">
                <img src={greyLamb} alt="Grey Lamborghini" />
                <div>$119,950</div>
                <div id="sect3-cars-r1-c3-name">
                  <span id="sect3-cars-r1-c3-name-text">
                    2012 Lamborghini Gallardo LP55
                  </span>
                </div>
              </div>
            </div>
            <div id="sect3-cars-r2">
              <div className="sect3-cars-col" id="sect3-cars-r2-c1">
                <img src={whiteMclaren1} alt="White McLaren" />
                <div>$149,000</div>
                <div id="sect3-cars-r2-c1-name">
                  <span id="sect3-cars-r2-c1-name-text">2016 McLaren 570S</span>
                </div>
              </div>
              <div className="sect3-cars-col" id="sect3-cars-r2-c2">
                <img src={redMclaren} alt="Red McLaren" />
                <div>$229,500</div>
                <div id="sect3-cars-r2-c2-name">
                  <span id="sect3-cars-r2-c2-name-text">
                    2019 McLaren 600LT Coupe
                  </span>
                </div>
              </div>
              <div className="sect3-cars-col" id="sect3-cars-r2-c3">
                <img src={neonPorsche} alt="Neon Porsche" />
                <div>$189,000</div>
                <div id="sect3-cars-r2-c3-name">
                  <span id="sect3-cars-r2-c3-name-text">
                    2018 Porsche 911 GT3
                  </span>
                </div>
              </div>
            </div>
            <div id="sect3-cars-r3">
              <div className="sect3-cars-col" id="sect3-cars-r3-c1">
                <img src={silverLamb} alt="Silver Lamborghini" />
                <div>$159,900</div>
                <div id="sect3-cars-r3-c1-name">
                  <span id="sect3-cars-r3-c1-name-text">
                    2004 Lamborghini Murcielago
                  </span>
                </div>
              </div>
              <div className="sect3-cars-col" id="sect3-cars-r3-c2">
                <img src={whiteAston} alt="White Aston Martin" />
                <div>$258,786</div>
                <div id="sect3-cars-r3-c2-name">
                  <span id="sect3-cars-r3-c2-name-text">
                    2019 Aston Martin DB11 AMR Coupe
                  </span>
                </div>
              </div>
              <div className="sect3-cars-col" id="sect3-cars-r3-c3">
                <img src={redFerrari} alt="Red Ferrari" />
                <div>$3,495,000</div>
                <div id="sect3-cars-r3-c3-name">
                  <span id="sect3-cars-r3-c3-name-text">
                    2014 Ferrari LaFerrari V12 Coupe
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div id="sect3-more">
            <a href="">VIEW MORE</a>
          </div>
        </section>
        <section id="sect4">
          <div id="sect4-title">
            <span id="sect4-title-text"> SELL WITH PRIMARY EXOTICS </span>
          </div>
          <div id="sect4-subtitle">
            <span id="sect4-subtitle-text">
              Our process is simple and secure. Follow these quick steps to
              start selling your exotic cars on our platform today!
            </span>
          </div>
          <div id="sect4-process">
            <div id="sect4-process-step1">
              <img id="sect4-process-step1-img" src={listPic} alt="" />
              <div id="sect4-process-step1-description">
                <div>Step 1</div>
                <span id="sect4-process-step1-description-text">
                  Create an account{" "}
                  <a href="" id="sect4-process-step1-description-text-here">
                    here
                  </a>
                </span>
              </div>
            </div>
            <div id="sect4-process-step2">
              <img src={carPic} alt="" />
              <div id="sect4-process-step2-description">
                <div>Step 2</div>
                <span id="sect4-process-step2-description-text">
                  Add images and info to your inventory
                </span>
              </div>
            </div>
            <div id="sect4-process-step3">
              <img src={pricePic} alt="" />
              <div id="sect4-process-step2-description">
                <div>Step 3</div>
                <span id="sect4-process-step2-description-text">
                  Set your price
                </span>
              </div>
            </div>
            <div id="sect4-process-step4">
              <img src={handPic} alt="" />
              <div id="sect4-process-step2-description">
                <div>Step 4</div>
                <span id="sect4-process-step2-description-text">
                  Start selling!
                </span>
              </div>
            </div>
          </div>
          <div id="sect4-start">
            <span>START SELLING</span>
          </div>
        </section>
        <section id="sect5">
          <div id="sect5-first">
            <div id="sect5-first-title">
              <span id="sect5-first-title-text">JOIN OUR DEALER NETWORK</span>
            </div>
            <div id="sect5-first-body">
              <p>
                Primary Exotics is in the market of selling cars. Let us help
                you get connected to more serious buyers and quality leads. Join
                our Dealer Network to have access to an organized platform where
                your inventory stays up to date and easy to access.
              </p>
            </div>
            <div id="sect5-first-more">
              <span id="sect5-first-more-text">LEARN MORE</span>
            </div>
          </div>
          <div id="sect5-second">
            <div id="sect5-second-title">
              <span id="sect5-second-title-text">
                SUBSCRIBE TO OUR NEWSLETTER
              </span>
            </div>
            <form id="sect5-second-form">
              <input
                id="sect5-second-form-input"
                type="text"
                placeholder="Enter Your Email"
              />
              <input
                id="sect5-second-form-submit"
                type="submit"
                value="SUBSCRIBE"
              />
            </form>
          </div>
        </section>
      </main>
      <footer>
        <div id="footer-search">
          <input type="text" placeholder="Search" />
        </div>
        <div id="footer-info">
          <nav id="footer-info-nav">
            <ul id="footer-info-nav-list">
              <li id="footer-info-nav-list-first">Become a Dealer</li>
              <li className="footer-listitem">Find a Dealer</li>
              <li className="footer-listitem">About Us</li>
              <li className="footer-listitem">Contact Us</li>
              <li className="footer-listitem">Blog</li>
              <li className="footer-listitem">Dealer Disclaimer</li>
            </ul>
          </nav>
          <div id="footer-info-rights">
            &#169; 2020 Primary Exotics, LLC. (Formerly Known as
            "ExoticsAutoTrader") Partners: GroMarketing
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
