import React, { useState } from 'react';
import Tecla from "./Tecla";
import "../styles/Teclado.css";
import QuizBox from "./QuizBox";

function Teclado() {

  const [numero, setNumero] = useState("");

  return (
    <>
    <QuizBox texto={numero}></QuizBox>
    <div className="teclado">
      <Tecla num="0" quizNum={numero}/>
      <Tecla num="1" />
      <Tecla num="2" />
      <Tecla num="3" />
      <Tecla num="4" />
      <Tecla num="5" />
      <Tecla num="6" />
      <Tecla num="7" />
      <Tecla num="8" />
      <Tecla num="9" />
    </div>
    </>
  );
}

export default Teclado;
