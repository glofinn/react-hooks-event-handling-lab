// Code Keypad Component Here
import React from "react";
import EyesOnMe from "./EyesOnMe";

function Keypad() {
  function enter() {
    console.log("Entering password...");
  }
  return (
    <div>
      <input onChange={enter} type="password" />
      <EyesOnMe />
    </div>
  );
}

export default Keypad;
