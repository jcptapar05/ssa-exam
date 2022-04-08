import React from "react";
import smartphone from "../assets/product-smartphone.svg";
import SubContainer from "./SubContainer";
import Title from "./Title";

const Augmented = () => {
  return (
    <SubContainer>
      <div className="container">
        <div className="row augmented">
          <div className="col-md-6">
            <img src={smartphone} alt="" />
          </div>
          <div className="col-md-6">
            <Title name="Augmented" titleColor="black" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione a omnis recusandae beatae! Accusamus, enim.</p>
          </div>
        </div>
      </div>
    </SubContainer>
  );
};

export default Augmented;
