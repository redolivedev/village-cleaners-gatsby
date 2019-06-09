import React from "react";
import balloon from "../images/balloon.svg";
import { Link } from "gatsby";

export default function HomeHero() {
  return (
    <div
      className="home-hero"
      id="home"
      style={{
        backgroundColor: "black"
      }}
    >
      <div className="video-wrap">
        <video autoPlay loop muted id="home_video" preload="none">
          <source src="http://d3lh853np2icy9.cloudfront.net/villagecleaners-home-video.mp4" />
        </video>
      </div>

      <div className="home-hero-content">
        <img
          src={balloon}
          alt="balloon logo"
          style={{
            filter: "invert(1)",
            width: "100px"
          }}
        />

        <h1 className="h1 white">
          Dry Cleaning & Laundry<span>Free Pick Up & Delivery</span>
        </h1>
        <Link to="/pick-up-delivery/" className="btn white pickup-btn">
          LEARN MORE
        </Link>
        <i className="fa fa-chevron-down dwn-arw" aria-hidden="true" />
        <div className="hero-link">
          <span data-menuanchor="sec0" className="upp">
            <a href="#sec0">APP</a>
          </span>
          <span data-menuanchor="sec1" className="upp">
            <a href="#sec1">Services</a>
          </span>
          <span data-menuanchor="sec2" className="upp">
            <a href="#sec2">Village Plus</a>
          </span>
          <span data-menuanchor="sec3" className="upp">
            <a href="#sec3">Locations</a>
          </span>
        </div>
      </div>
    </div>
  );
}
