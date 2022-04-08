import React from "react";
import search from "../assets/product-search.svg";
import SubContainer from "./SubContainer";
import Title from "./Title";

const Discover = () => {
  return (
    <SubContainer>
      <div className="container">
        <div className="row discover">
          <div className="col-md-6">
            <Title name="Discover" titleColor="black" />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit optio aperiam veritatis corporis dolores reiciendis sapiente iure,
              voluptates consectetur sit.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img src={search} alt="" />
          </div>
        </div>
      </div>
    </SubContainer>
  );
};

export default Discover;
