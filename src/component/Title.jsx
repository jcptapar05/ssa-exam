import React from "react";

const Title = ({ titleColor, name }) => {
  return <h2 className={`  display-2 ${titleColor === "black" ? "titleBlack" : "titleWhite"}`}>{name}</h2>;
};

export default Title;
