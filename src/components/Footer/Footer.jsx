import React from "react";
import { ListGroup } from "reactstrap";

import logo from "../../assets/images/logo-new.png";
import "../../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src={logo} alt="logo" />
        <h5>Anything</h5>
        <p>Any time, Any Where !</p>
      </div>
      <div>
        <h5 className="footer__title mb-3">Delivery Time</h5>
        <ListGroup>
          <div className="delivery__time-item border-0 ps-0">
            <span>7 days 24 hours</span>
          </div>
        </ListGroup>
      </div>
    </footer>
  );
};

export default Footer;
