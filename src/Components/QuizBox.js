import React from "react";
import "../styles/QuizBox.css";

function QuizBox(props) {
  return <div className="quiz-box">{props.texto}</div>;
}

export default QuizBox;
