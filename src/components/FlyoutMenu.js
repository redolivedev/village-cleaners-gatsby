import React, { Component } from "react";
import { Link } from "gatsby";
import logo from "../img/logo.svg";
import MainMenu from "./MainMenu";

export default class FlyoutMenu extends Component {
  constructor() {
    super();
    this.state = {
      menuOpen: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(e) {
    console.log("click");
    this.setState(state => ({
      menuOpen: !state.menuOpen
    }));
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <div className="header-right">
          <Link to="/locations/" className="locations">
            LOCATIONS
          </Link>
          <div>|</div>
          <div className="menu">Menu</div>
          <button className="line-wrap" onClick={this.toggleMenu}>
            <span />
            <span />
            <span />
            <span />
          </button>
        </div>
        {this.state.menuOpen ? (
          <div className="fixed-nav">
            <Link to="/" rel="home" className="logo">
              <img src={logo} alt="Logo" style={{ filter: "invert(1)" }} />
            </Link>
            <button className="close" onClick={this.toggleMenu}>
              <i className="icon-x" />
            </button>
            <MainMenu />
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
