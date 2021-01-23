import React from "react";
import { Link } from "react-router-dom";

function Title() {
  return (
    <section id="story-details">
      <div className="title-container">
        <div className="title-img"></div>

        <div className="title-content">
          <h2>Story Details</h2>
          <ol>
            <li className="first-item">
              <Link to="/">Home</Link>
            </li>
            <li className="last-item">Story Details</li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Title;
