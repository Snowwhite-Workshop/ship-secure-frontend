import React from "react";
import ExitIcon from "../components/atoms/ExitIcon";
import HeaderText from "../components/atoms/HeaderText";
import RegularText from "../components/atoms/RegularText";
import Buttons from "../components/atoms/Buttons";
import err404 from "../Images/404_error.svg";

const Err404Style = {
  minHeight: "100vh",
  width: "100%",
};
const Img404Style = {
  width: "98%",
  margin: "auto",
  paddingTop: "40px",
};
const DivImgStyle = {
  display: "flex",
};

function Error404() {
  return (
    <>
      <div style={Err404Style}>
        <ExitIcon />
        <div style={DivImgStyle}>
          <img src={err404} style={Img404Style} />
        </div>
        <HeaderText text="Whoops" color="000" padding="20px" />
        <RegularText
          text="The page you are looking for is"
          textAlign="center"
        />
        <RegularText text="not available" textAlign="center" />
        <Buttons text="Go back" marginTop="100px" />
      </div>
    </>
  );
}

export default Error404;
