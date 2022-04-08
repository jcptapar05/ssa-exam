import React from "react";
import logo from "../assets/logo1.svg";

const SubFooter = () => {
  return (
    <div className="container-fluid text-white sub-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-1">
            <img src={logo} alt="" />
          </div>
          <div className="col-md-5">
            <h3>Protoapp</h3>
            <h3 className="camp">Camp One Inc, LLC</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eum sapiente earum facere nisi eos adipisci praesentium eius accusamus,
              cupiditate est eligendi maxime perspiciatis tempora quia, quaerat voluptas. Doloremque, vero!
            </p>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </div>
  );
};

export default SubFooter;
