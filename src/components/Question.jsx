import React, { useState } from "react";
import Answer from "./Answer.jsx";

function Question(props) {
 
  return (
    <div>
      {props.text}
      <Answer 
    choice={props.choice} setUserAnswer={props.setUserAnswer}/>
      <button
        onClick={() => {
          props.setCorrectAnswer(props.choice[props.answer]);
        }}
      >
        Click for correct answer
      </button>
      <p>The correct answer is {props.correctAnswer}</p>
    </div>
  );
}

export default Question;
