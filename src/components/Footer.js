import React from "react";
import { FaFacebookF, FaInstagram, FaGooglePlusG } from "react-icons/fa";
import { Link } from "gatsby";
import FooterMenu from "./FooterMenu";

export default function Footer() {
  return (
    <div className="footer" id="real-footer">
      <div className="bdr">
        <div className="row">
          <div className="columns small-12 xlarge-6 mobile-center">
            <div className="pad">
              <div className="row align-middle source">
                <span className="xsm">CONNECT WITH US!</span>
                <Link className="social">
                  <FaFacebookF />
                </Link>
                <Link className="social">
                  <FaGooglePlusG />
                </Link>
                <Link className="social">
                  <FaInstagram />
                </Link>
              </div>
            </div>
          </div>
          <div className="columns small-12 xlarge-6 text-right mobile-center">
            <div className="pad row align-middle align-right">
              <div className="xsm" style={{ marginRight: "10px" }}>
                DOWNLOAD OUR MONTHLY COUPON
              </div>
              <Link href="#coupon" className="xsm fancybox coupon-button">
                DOWNLOAD
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row align-middle">
        <div className="foot-nav">
          <FooterMenu />
        </div>
        <div className="copy">
          <span>&copy; 2019 VILLAGE CLEANERS.</span> All Rights Reserved.
        </div>
      </div>
    </div>
  );
}
