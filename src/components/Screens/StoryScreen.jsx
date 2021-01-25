import React from "react";
import Header from "../Stories/Header";
import Title from "../Stories/Title";
import StoryDetails from "../Stories/StoryDetails";
import Footer from "../Stories/Footer";

function StoryHome() {
  return (
    <div id="story-details" className="container-fluid">
      <Header />
      <Title />
      <StoryDetails />
      <Footer />
    </div>
  );
}

export default StoryHome;
