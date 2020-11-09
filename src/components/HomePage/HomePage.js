import React, { Component } from "react";

import listPic from "../../images/list.png";
import carPic from "../../images/car.png";
import pricePic from "../../images/price.png";
import handPic from "../../images/hand.png";

import "./HomePage.css";
import LandingSection from "../LandingSection/LandingSection";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <div>
          <LandingSection />
          <section id="sect4">
            <div id="sect4-title">
              <span id="sect4-title-text"> SELL WITH PRIMARY EXOTICS </span>
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
                  you get connected to more serious buyers and quality leads.
                  Join our Dealer Network to have access to an organized
                  platform where your inventory stays up to date and easy to
                  access.
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
        </div>
      </div>
    );
  }
}
