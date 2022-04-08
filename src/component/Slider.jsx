import React from "react";
import leaves from "../assets/bg-leaves.svg";
import decals from "../assets/bg-decals.svg";
import DownloadBtn from "./DownloadBtn";

const Slider = () => {
  return (
    <div className="container-fluid">
      <div className="slider__img d-none d-md-block">
        <img src={leaves} alt="" />
      </div>
      <div className="slider__img-decals d-none d-md-block">
        <img src={decals} alt="" />
      </div>

      <div className="container slider">
        <div className="slider__content">
          <h1 className="display-1">Protoapp</h1>
          <h4 className="my-4">
            Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.
          </h4>
          <button className="btn btn-primary text-capitalize">get started</button>
        </div>
        <div className="slider__btn-wrapper">
          <DownloadBtn />
        </div>
      </div>
    </div>
  );
};

export default Slider;
