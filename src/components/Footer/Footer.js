import React from 'react';
import './Footer.css';

const Footer = function () {
  return (
    <div className="footer-dark">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-3 item">
              <h3>Links</h3>
              <ul>
                <li>
                  <span>Home</span>
                </li>
                <li>
                  <span>Athletes</span>
                </li>
                <li>
                  <span>Hosting</span>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 item">
              <h3>About</h3>
              <ul>
                <li>
                  <span>Company</span>
                </li>
                <li>
                  <span>Team</span>
                </li>
                <li>
                  <span>Careers</span>
                </li>
              </ul>
            </div>
            <div className="col-md-6 item text">
              <h3>ABC Racing</h3>
              <p>
                Praesent sed lobortis mi. Suspendisse vel placerat ligula.
                Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis
                tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel
                in justo.
              </p>
            </div>
            <div className="col item social">
              <span>
                <i className="icon ion-social-facebook" />
              </span>
              <span>
                <i className="icon ion-social-twitter" />
              </span>
              <span>
                <i className="icon ion-social-snapchat" />
              </span>
              <span>
                <i className="icon ion-social-instagram" />
              </span>
            </div>
          </div>
          <p className="copyright">ABC Racing © 2021</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
