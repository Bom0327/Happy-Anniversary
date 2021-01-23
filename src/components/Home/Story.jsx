import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import S1 from "../../images/Story-img-1.jpg";
import S2 from "../../images/Story-img-2.jpg";
import S3 from "../../images/Story-img-3.jpg";
import S4 from "../../images/Story-img-4.jpg";

const story1 =
  "Jet and Bomyung majored in different fields but in the same university - Nagoya Institute of Technology. They first met during a culture class for foreigners. Jet asked for Bomyung's Facebook address and she gladly shared it with him. Later he contacted her to ask her to bring him along to church with her. They then became good friends and regularly studied in the library as well as went jogging in Tsuruma Park together.";
const story2 =
  "Jet prepared a long script in Korean and confessed his feelings to Bomyung at sometime past 1am in Tsuruma Park. At first she declined, saying that she didn't want to lose her best friend because couples who break up stop being friends. Jet persuaded her by saying that she wouldn't want to go out with somebody who she cannot be best friends with. Bomyung finally agreed and accepted him as her boyfriend. Little did she know that he would end up becoming her husband!";
const story3 =
  "Jet and Bomyung went on a trip to Okinawa for their 6th anniversary, with Jet secretly bringing along an engagement ring. At first he planned to give her a romantic proposal by the beach at sunset. However, when the time came Bomyung suddenly felt tired and wanted to go back and rest. So Jet had no choice but to propose to her in the hotel... Of course Bomyung was delighted and accepted his proposal! (She was also curious about the ring and asked him how many carats the diamond was.)";
const story4 =
  "Jet and Bomyung tied the knot at Okinawa, surrounded by their family and blessed by good weather. The wedding ceremony was a short 20-minute session held in a lovely chapel overlooking the sea. It was then followed by the 2-hour reception filled with fun games and touching speeches. (It just so happened that the year 2019 was Reiwa 1 in Japan too so the wedding date was Reiwa 1, 11/11! A memorable day indeed)";

function Story() {
  return (
    <section id="story">
      <div className="story-container container">
        <div className="vector-title">
          <div className="vector-img"></div>
          <h1>Our Love Story</h1>
        </div>

        <div className="story-wrap">
          <div className="row">

            <div className="col-lg-6 col-md-6 pr">
              <div className="story-img-container">
                <img
                  className="story-img"
                  src={S1}
                  alt="story1"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 text-container">
              <div className="story-text left-align-text">
                <h3>First time we met</h3>
                <p className="date">Sometime in April, 2011 </p>
                <p className="story">{story1.substring(0, 215) + "..."}</p>
                <Link to="/story-details#story1">Read More</Link>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 text-container">
              <div className="story-text right-align-text">
                <h3>Our first date together</h3>
                <p className="date">Sep 22, 2012</p>
                <p className="story">{story2.substring(0, 215) + "..."}</p>
                <Link to="/story-details#story2">Read More</Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 pl">
              <div className="story-img-container">
                <img
                  className="story-img"
                  src={S2}
                  alt="story2"
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-6 pr">
              <div className="story-img-container">
                <img
                  className="story-img"
                  src={S3}
                  alt="story3"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 text-container">
              <div className="story-text left-align-text">
                <h3>Our Engagement</h3>
                <p className="date">Sep 22, 2018</p>
                <p className="story">{story3.substring(0, 215) + "..."}</p>
                <Link to="/story-details#story3">Read More</Link>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 text-container">
              <div className="story-text right-align-text">
                <h3>Our Wedding</h3>
                <p className="date">Nov 11, 2019</p>
                <p className="story">{story4.substring(0, 215) + "..."}</p>
                <Link to="/story-details#story4">Read More</Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 pl">
              <div className="story-img-container">
                <img
                  className="story-img"
                  src={S4}
                  alt="story4"
                />
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Story;
