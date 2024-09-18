import React from "react";

export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
  };

  return (
    <div
      className={`die-face face-${props.value}`}
      style={styles}
      onClick={props.holdDice}
    >
      <div className="dot-1"></div>
      <div className="dot-2"></div>
      <div className="dot-3"></div>
      <div className="dot-4"></div>
      <div className="dot-5"></div>
      <div className="dot-6"></div>

      {/* <h2 className="die-num">{}</h2> */}
    </div>
  );
}
