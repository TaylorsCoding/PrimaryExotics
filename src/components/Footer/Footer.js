import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div>
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
    </div>
  );
}
