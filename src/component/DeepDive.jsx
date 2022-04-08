import React from "react";
import DownloadBtn from "./DownloadBtn";
import Title from "./Title";
import lines from "../assets/bg-decals2.svg";

const DeepDive = () => {
  return (
    <div className="container-fluid text-white text-center deep">
      <div className="deep__content">
        <Title name="Deep dive. Ready?" titleColor="white" />
        <p className="mt-3 mb-5">So are we. You're. Not. Word filler.</p>
      </div>
      <DownloadBtn />
      <div className="lines  d-none d-md-block">
        <img src={lines} alt="" />
      </div>
    </div>
  );
};

export default DeepDive;
