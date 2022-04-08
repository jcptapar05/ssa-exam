import React from "react";
import laravelMix from "../assets/badge.laravel-mix.svg";
import howTo from "../assets/badge.how-to-read-code.svg";
import wave from "../assets/bg-decals3.svg";
import Title from "./Title";

const Action = () => {
  return (
    <div className="container-fluid action">
      <div className="container px-5 text-center">
        <Title name="Last Call to Action" titleColor="black" />
        <p>Another section content goes here</p>

        <div className="row mt-5">
          <div className="col-md-6 my-3">
            <div className="action__card card-1 mx-auto">
              <div>
                <img src={laravelMix} alt="" />
                <a href="#" className="action__card-btn">
                  automation
                </a>
              </div>
              <div className="action__card-content">
                <h6 className="text-uppercase">roll out</h6>
                <h3 className="text-capitalize my-4">Automatic Prototyping</h3>
                <p>
                  Webpack is the most powerfull and flexible asset compilation tool available today. With that power, however, comes a certain level
                  of complexity.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 my-3">
            <div className="action__card card-2 mx-auto">
              <div>
                <img src={howTo} alt="" />
                <a href="#" className="action__card-btn">
                  simplicity
                </a>
              </div>
              <div className="action__card-content">
                <h6 className="text-uppercase">sip coffee</h6>
                <h3 className="text-capitalize my-4">complexity simplified</h3>
                <p>
                  Webpack is the most powerfull and flexible asset compilation tool available today. With that power, however, comes a certain level
                  of complexity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wave  d-none d-md-block">
        <img src={wave} alt="" />
      </div>
    </div>
  );
};

export default Action;
