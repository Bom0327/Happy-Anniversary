import React from "react";
import Moment from "moment";
import { extendMoment } from "moment-range";

const moment = extendMoment(Moment);

const start = new Date("November 11, 2019");
const today = new Date();
const range = moment.range(start, today);
const rangeOfYear = range.diff("years");

const lastYear = new Date().getFullYear() - 1;
const thisYear = new Date().getFullYear();
const condition = new Date("November 11" + "," + thisYear);

function Animate() {
  return (
    <div className="slide-content">
      <div className="slide-subtitle">
        <h4>GOT MARRIED</h4>
      </div>
      <div className="slide-title">
        <h1>Happy {rangeOfYear}year Anniversary</h1>
      </div>
      <div className="slide-text">
        <p>11 November {today > condition ? thisYear : lastYear}</p>
      </div>

      <div className="animation-pulse">
        <div className="animated-circle"></div>
      </div>
    </div>
  );
}

export default Animate;
