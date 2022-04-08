import React from "react";
import GooglePlay from "../assets/badge.play-store.svg";
import AppStore from "../assets/badge.app-store.svg";

const DownloadBtn = () => {
  return (
    <div className="text-center mx-auto dlBtn">
      <div className="row">
        <div className="col-md-6 mt-3 text-center">
          <img className="cursor-pointer" src={GooglePlay} alt="" />
        </div>
        <div className="col-md-6 mt-3 text-center">
          <img className="cursor-pointer" src={AppStore} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DownloadBtn;
