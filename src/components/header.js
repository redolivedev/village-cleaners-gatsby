import React from "react";
import { Link } from "gatsby";
import logo from "../img/logo.svg";
import MainMenu from "./MainMenu";
import _ from "lodash";
import FlyoutMenu from "./FlyoutMenu";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      scrolled: false
    };
  }

  componentDidMount() {
    window.onscroll = _.throttle(this.checkScroll, 200);
  }

  componentWillUnmount() {
    window.onscroll = null;
  }

  checkScroll = () => {
    if (window.pageYOffset === 0) {
      this.setState({ scrolled: false });
    } else {
      this.setState({ scrolled: true });
    }
  };

  render() {
    return (
      <header
        id="masthead"
        className={this.state.scrolled ? "site-header scrolled" : "site-header"}
        role="banner"
      >
        <Link to="/" className="logo">
          <img src={logo} alt="Logo" style={{ filter: "invert(1)" }} />
        </Link>
        {this.state.scrolled ? (
          <FlyoutMenu />
        ) : (
          <div className="topbar">
            <MainMenu />
          </div>
        )}
      </header>
    );
  }
}

export default Header;
