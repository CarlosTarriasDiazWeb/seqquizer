import React from "react";
import "../styles/Tecla.css";

function Tecla(props) {
  return <button type="button" className="tecla">{props.num}</button>;
}

export default Tecla;
