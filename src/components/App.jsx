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
  

  return (
    <div className="app">
     <div> {userAnswer === data[questionNumber].question.correct_choice_index ?
        "Your answer is correct!"
          : userAnswer !== null ?
           "Wrong answer! Click the button if you want the correct answer"
          : ""
    } </div>
      
      <Question
        text={data[questionNumber].question.text}
        choice={data[questionNumber].question.choices}
        answer={data[questionNumber].question.correct_choice_index}
        setCorrectAnswer={setCorrectAnswer}
        correctAnswer={correctAnswer}
        setUserAnswer={setUserAnswer}
      />
      {/* {data.map((element) => (
        <Question
          text={element.question.text}
          choice={element.question.choices}
          answer={element.question.correct_choice_index}
        />
      ))} */}

      <NextQuestion
        setQuestion={setQuestionNumber}
        currentQuestion={questionNumber}
        setCorrectAnswer={setCorrectAnswer}
      />
    </div>
  );
}

export default App;

/* Goal 1, Day 3
- [X] Add state to `<App />` using the `useState` React hook to keep track of the current question number.
  - [X] Replace the current question number variable that you wrote in Day 1.
- [X] Create a function that updates the state to the next question number.
- [X] Make a prop on `<NextQuestion />` to pass the prop down to the button element to call that function when the button is clicked.
- [X] Check that every part of your question and answer updates to reflect the current question number.
- [X] Reset the state of `isAnswered` when the Next Question button is clicked so the correct answer stops being displayed.
- [X] BONUS: Add [conditional rendering](https://reactjs.org/docs/conditional-rendering.html) to hide `<NextQuestion />` when there are no more next questions.

Goal 2, day 3
- [X] Using `useState` in `<App />`, create a state variable to keep track of which answer choice the user clicks.
  - [X] Inside the map function for the Answer components, add an event handler that updates the state to be the choice that the user clicks.
  - [X] HINT: Use props to pass down the state from `<App />`.
  - [X] HINT: Don't forget to pass your `onClick` down as a prop as well.
- [X] Inside `<App />` (below state and above return), write a conditional that checks if the answer clicked is the correct answer.
  - [X] Display text on the screen telling the user if their answer choice was correct.
  - [X] Display text on the screen telling the user what the correct answer was.
  - [ ] HINT: To do this, you should create a variable and display that variable inside your return statement.
  - [ ] BONUS: Use [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) instead of string concatenation.

  Goal 3: Sort your Trivia app into separate files and import/export the components.

- [X] Create a new `.js` file inside the components folder for each of your components.
- [X] Move the code for your components into their new files.
- [X] Add an export to each of your components.
- [X] Import all of your components into the correct files.

> ![Day 3.5 correct](https://i.imgur.com/HC7M6LH.png) >![Day 3.5 wrong](https://i.imgur.com/DWQu3bb.png)
  */
