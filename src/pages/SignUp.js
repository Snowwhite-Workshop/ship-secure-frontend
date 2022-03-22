import React from "react";
import InputFieldRegular from "../components/atoms/InputFieldRegular";
import RegularText from "../components/atoms/RegularText";
import Buttons from "../components/atoms/Buttons";
import Logo from "../components/atoms/Logo";

const SignUp = () => {
  return (
    <div style={MainDiv}>
      <div style={LogoDiv}>
        <Logo dark size="40px" />
      </div>
      <div style={InputContainer}>
        <RegularText
          text={`Sign Up`}
          align="center"
          margin="10px 0"
          size="20px"
        />
        <div style={InputDiv}>
          <RegularText text="username" />
          <InputFieldRegular />
        </div>
        <div style={InputDiv}>
          <RegularText text="username" />
          <InputFieldRegular />
        </div>
        <div style={InputDiv}>
          <RegularText text="username" />
          <InputFieldRegular />
        </div>
        <div style={InputDiv}>
          <RegularText text="username" />
          <InputFieldRegular />
        </div>
        <div style={InputDiv}>
          <Buttons text={"Create Account"} padding="10px 0" />
        </div>
        <div style={InputDiv}>
          <Buttons text={"Sign up with Google"} padding="10px 0" />
        </div>
      </div>
      <RegularText
        align="center"
        text={`By continuing with this account creation, you hereby agree to our Terms and Conditions`}
      />
      <RegularText
        text={`Have an account? Sign in`}
        align="center"
        margin="20px 0"
      />
    </div>
  );
};

export default SignUp;

const MainDiv = {
  width: "100%",
  //   backgroundColor: "red",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const LogoDiv = {
  width: "95%",
  height: "50px",
  margin: "10px 0 30px",
  //   backgroundColor: "red",
  display: "flex",
  justifyContent: "right",
  alignItems: "center",
};

const InputDiv = {
  width: "100%",
  //   backgroundColor: "orange",
  margin: "10px 0",
};

const InputContainer = {
  width: "80%",
  padding: "10px",
  margin: "10px 0",
  //   backgroundColor: "purple",
  boxShadow:
    "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)",
  borderRadius: "10px",
};
