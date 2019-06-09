import React from "react";
import Header from "./header";
import Footer from "./Footer";
// import "../scss/index.scss";

const Layout = ({ children }) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
