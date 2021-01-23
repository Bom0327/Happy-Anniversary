import React from "react";
import Bom from "../../images/Bom-img.jpg";
import Jet from "../../images/Jet-img.jpg";


function Couple() {
  return (
    <section id="couple">
      <div className="couple-container container">
        <div className="vector-title">
          <div className="vector-img"></div>
          <h1>Happy Couple</h1>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-6 border-right">
            <div className="couple-wrap">
              <div className="couple-img">
                <img src={Bom} alt="Bom" />
              </div>
              <div className="couple-content">
                <h3>Choi Bomyung</h3>
                <p>
                  Kind and loving gal from Busan, South Korea. Likes cakes and
                  fruits. Aspires to be an amazing mom and wife.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6">
            <div className="couple-wrap">
              <div className="couple-img">
                <img src={Jet} alt="Jet" />
              </div>
              <div className="couple-content">
                <h3>Tan You Jie Jet</h3>
                <p>
                  Humorous and considerate guy from Kuala Lumpur, Malaysia.
                  Likes fruitcake and chicken. Already knows he will be an
                  amazing dad and husband (he wrote this).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Couple;
