import React from "react";
import works from "../assets/product-work.svg";
import SubContainer from "./SubContainer";
import Title from "./Title";
const EndlessPossibility = () => {
  return (
    <SubContainer>
      <div className="container">
        <div className="row endless">
          <div className="col-md-6">
            <Title name="Endless Posibilities" titleColor="black" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam cumque doloribus inventore libero adipisci.</p>
          </div>

          <div className="col-md-6 text-center">
            <img src={works} alt="" />
          </div>
        </div>
      </div>
    </SubContainer>
  );
};

export default EndlessPossibility;
