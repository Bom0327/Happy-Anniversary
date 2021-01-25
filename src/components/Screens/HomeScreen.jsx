import React from "react";
import Header from "../Home/Header";
import Carousel from "../Home/Carousel";
import Countdown from "../Home/Countdown";
import Couple from "../Home/Couple";
import Story from "../Home/Story";
import Gallery from "../Home/Gallery";
import Footer from "../Home/Footer";

function Home() {
  return (
    <div id="home" className="container-fluid">
      <Header />
      <Carousel />
      <Countdown />
      <Couple />
      <Story />
      <Gallery />
      <Footer />
    </div>
  );
}

export default Home;
