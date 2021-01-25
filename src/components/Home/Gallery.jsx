import React from "react";
import G1 from "../../images/Gallery-img-1.jpg";
import G2 from "../../images/Gallery-img-2.jpg";
import G3 from "../../images/Gallery-img-3.jpg";
import G4 from "../../images/Gallery-img-4.jpg";
import G5 from "../../images/Gallery-img-5.jpg";
import G6 from "../../images/Gallery-img-6.jpg";
import G7 from "../../images/Gallery-img-7.jpg";
import G8 from "../../images/Gallery-img-8.jpg";
import G9 from "../../images/Gallery-img-9.jpg";
import G10 from "../../images/Gallery-img-10.jpg";
import G11 from "../../images/Gallery-img-11.jpg";
import G12 from "../../images/Gallery-img-12.jpg";

function Gallery() {
  return (
    <section id="gallery">
      <div className="gallery-container container-xl">
        <div className="vector-title">
          <div className="vector-img"></div>
          <h1>Our Gallery</h1>
        </div>

        <div className="gallery-wrap">
          <div className="row">
            <div className="col-lg-4 col-md-4 gallery-col">
              <div className="gallery-img-container">
                <img
                  className="gallery-img"
                  src={G1}
                  alt="img1"
                />
              </div>
            </div>

            <div className="col-lg-4 col-md-4 gallery-col">
              <div className="gallery-img-container">
                <img
                  className="gallery-img"
                  src={G2}
                  alt="img2"
                />
              </div>
            </div>

            <div className="col-lg-4 col-md-4 gallery-col">
              <div className="gallery-img-container">
                <img
                  className="gallery-img"
                  src={G3}
                  alt="img3"
                />
              </div>
            </div>

            <div className="col-lg-4 col-md-4 gallery-col">
              <div className="gallery-img-container">
                <img
                  className="gallery-img"
                  src={G4}
                  alt="img4"
                />
              </div>
            </div>

            <div className="col-lg-4 col-md-4 gallery-col">
              <div className="gallery-img-container">
                <img
                  className="gallery-img"
                  src={G5}
                  alt="img5"
                />
              </div>
            </div>

            <div className="col-lg-4 col-md-4 gallery-col">
              <div className="gallery-img-container">
                <img
                  className="gallery-img"
                  src={G6}
                  alt="img6"
                />
              </div>
            </div>

            <div className="col-lg-4 col-md-4 gallery-col">
              <div className="gallery-img-container">
                <img
                  className="gallery-img"
                  src={G7}
                  alt="img7"
                />
              </div>
            </div>

            <div className="col-lg-4 col-md-4 gallery-col">
              <div className="gallery-img-container">
                <img
                  className="gallery-img"
                  src={G8}
                  alt="img8"
                />
              </div>
            </div>

            <div className="col-lg-4 col-md-4 gallery-col">
              <div className="gallery-img-container">
                <img
                  className="gallery-img"
                  src={G9}
                  alt="img9"
                />
              </div>
            </div>

            <div className="col-lg-4 col-md-4 gallery-col">
              <div className="gallery-img-container">
                <img
                  className="gallery-img"
                  src={G10}
                  alt="img10"
                />
              </div>
            </div>

            <div className="col-lg-4 col-md-4 gallery-col">
              <div className="gallery-img-container">
                <img
                  className="gallery-img"
                  src={G11}
                  alt="img11"
                />
              </div>
            </div>

            <div className="col-lg-4 col-md-4 gallery-col">
              <div className="gallery-img-container">
                <img
                  className="gallery-img"
                  src={G12}
                  alt="img12"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
