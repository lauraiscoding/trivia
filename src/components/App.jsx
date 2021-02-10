import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function Question(props) {
  const [correctAnswer, setCorrectAnswer] = useState(null);
  return (
    <div>
      {props.text}
      <Answer choice={props.choice} />
      <button
        onClick={() => {
          setCorrectAnswer(props.choice[props.answer]);
        }}
      >
        Click for correct answer
      </button>
      <p>The correct answer is {correctAnswer}</p>
    </div>
  );
}

function NextQuestion(props) {
  return <button onClick={() => {props.setQuestion(props.currentQuestion + 1)}}>Next question</button>;
}

function Answer(props) {
  // let array1 = ["48", "13", "52", "50"]
  // map1 = array1.map(x => <p>{x}</p>);
  return (
    <div>
      {props.choice.map((x) => (
        <div>{x}</div>
      ))}
    </div>
  );
}

function App() {
  // Declare state here
  // const {name, setName} = useState(initialValue)
  const [questionNumber, setQuestionNumber] = useState(0);

  //
  // data = [ {.....}, {......}, .....]
  // data.map(element => <Question text={element.question.text} choice={element.question.choices} answer={} />);
  return (
    <div className="app">
  {questionNumber}
      {data.map((element) => (
        <Question
          text={element.question.text}
          choice={element.question.choices}
          answer={element.question.correct_choice_index}
        />
      ))}

      <NextQuestion setQuestion={setQuestionNumber} currentQuestion={questionNumber} />
    </div>
  );
}

export default App;

/* Goal 1, Day 3
- [X] Add state to `<App />` using the `useState` React hook to keep track of the current question number.
  - [ ] Replace the current question number variable that you wrote in Day 1.
- [ ] Create a function that updates the state to the next question number.
- [ ] Make a prop on `<NextQuestion />` to pass the prop down to the button element to call that function when the button is clicked.
- [ ] Check that every part of your question and answer updates to reflect the current question number.
- [ ] Reset the state of `isAnswered` when the Next Question button is clicked so the correct answer stops being displayed.
- [ ] BONUS: Add [conditional rendering](https://reactjs.org/docs/conditional-rendering.html) to hide `<NextQuestion />` when there are no more next questions.

Goal 2, day 3
- [ ] Using `useState` in `<App />`, create a state variable to keep track of which answer choice the user clicks.
  - [ ] Inside the map function for the Answer components, add an event handler that updates the state to be the choice that the user clicks.
  - [ ] HINT: Use props to pass down the state from `<App />`.
  - [ ] HINT: Don't forget to pass your `onClick` down as a prop as well.
- [ ] Inside `<App />` (below state and above return), write a conditional that checks if the answer clicked is the correct answer.
  - [ ] Display text on the screen telling the user if their answer choice was correct.
  - [ ] Display text on the screen telling the user what the correct answer was.
  - [ ] HINT: To do this, you should create a variable and display that variable inside your return statement.
  - [ ] BONUS: Use [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) instead of string concatenation.

  Goal 3: Sort your Trivia app into separate files and import/export the components.

- [ ] Create a new `.js` file inside the components folder for each of your components.
- [ ] Move the code for your components into their new files.
- [ ] Add an export to each of your components.
- [ ] Import all of your components into the correct files.

> ![Day 3.5 correct](https://i.imgur.com/HC7M6LH.png) >![Day 3.5 wrong](https://i.imgur.com/DWQu3bb.png)
  */
