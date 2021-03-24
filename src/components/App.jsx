import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";
import Question from "./Question.jsx";

function NextQuestion(props) {
  if (props.currentQuestion > data.length - 2) {
    return null;
  }

  return (
    <button
      onClick={() => {
        // Increase the question #
        props.setQuestion(props.currentQuestion + 1);

        // Reset the current answer
        props.setCorrectAnswer(null);
        props.setUserAnswer(null);
      }}
    >
      Next question
    </button>
  );
}

function App() {
  // Declare state here
  // const {name, setName} = useState(initialValue)
  const [questionNumber, setQuestionNumber] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [userAnswer, setUserAnswer] = useState(null);
  
const correctIndex = data[questionNumber].question.correct_choice_index;
  return (
  
    <div className="app">
      
      <Question
        text={data[questionNumber].question.text}
        choice={data[questionNumber].question.choices}
        answer={data[questionNumber].question.correct_choice_index}
        setCorrectAnswer={setCorrectAnswer}
        correctAnswer={correctAnswer}
        setUserAnswer={setUserAnswer}
        userAnswer={userAnswer}
        correctIndex={correctIndex}
      />
      {/* {data.map((element) => (
        <Question
          text={element.question.text}
          choice={element.question.choices}
          answer={element.question.correct_choice_index}
        />
      ))} */}
 <div> {userAnswer === correctIndex ?
        "Your answer is correct!"
          : userAnswer !== null ?
           `Wrong answer! The right answer is ${data[questionNumber].question.choices[correctIndex]}`
          : ""
    } </div>

     { userAnswer !== null ?
     <NextQuestion
        setQuestion={setQuestionNumber}
        currentQuestion={questionNumber}
        setCorrectAnswer={setCorrectAnswer}
        setUserAnswer={setUserAnswer}
      />

        : null
        
        }
{//if user is on last question and answered it, 
 // then render a reset button
 questionNumber > data.length -2 && userAnswer !== null ?
  <button onClick={ () => {
    setQuestionNumber(0);
    setUserAnswer(null)
  }}
  >Play again?</button>
    : null
}
    </div>
  );
}

export default App;

//Disable other answer buttons after selecting one answer