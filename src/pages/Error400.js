import React from "react";
import ExitIcon from "../components/atoms/ExitIcon";
import HeaderText from "../components/atoms/HeaderText";
import RegularText from "../components/atoms/RegularText";
import Buttons from "../components/atoms/Buttons";
import err400 from "../Images/400_err.svg";

const Err400Style = {
  minHeight: "100vh",
  width: "100%",
};
const Img400Style = {
  width: "98%",
  margin: "auto",
  paddingTop: "40px",
};
const DivImgStyle = {
  display: "flex",
};

export default function Error400() {
  return (
    <div style={Err400Style}>
      <ExitIcon />
      <div style={DivImgStyle}>
        <img src={err400} style={Img400Style} />
      </div>
      <HeaderText text="Ooops" color="000" padding="20px"/>
      <RegularText text="Something went wrong." textAlign="center"/>
      <RegularText text="Please try again."  textAlign="center" />
      <Buttons text="Try again" marginTop="100px"/>
    </div>
  );
}
