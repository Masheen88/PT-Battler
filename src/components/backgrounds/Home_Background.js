import React from "react";
import "./Home_Background.css";
import Logo from "../../assets/stack.png";

export default function Home_Background() {
  let logo = <img id="Logo" src={Logo} alt="Logo" className="logo" />;
  return (
    <>
      <div className="background">
        {/* <span>{logo}</span> */}
        <span>{logo}</span>
        <span>{logo}</span>
        <span>{logo}</span>
        <span>{logo}</span>
        <span>{logo}</span>
        <span>{logo}</span>
        <span>{logo}</span>
        <span>{logo}</span>
        <span>{logo}</span>
        <span>{logo}</span>
        <span>{logo}</span>
        <span>{logo}</span>
        <span>{logo}</span>
        <span>{logo}</span>
        <span>{logo}</span>
        <span>{logo}</span>
        <span>{logo}</span>
        <span>{logo}</span>
        <span>{logo}</span>
      </div>
    </>
  );
}
