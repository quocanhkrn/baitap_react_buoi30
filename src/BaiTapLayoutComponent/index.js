import React from "react";
import "./index.css";
import Navbar from "./navbar";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";

function BaiTapThucHanhLayout() {
  return (
    <div className="wrapper">
      <Navbar />
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default BaiTapThucHanhLayout;
