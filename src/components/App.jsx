import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function Question(props) {
  return (
    <div>
      {props.text}
      <Answer choice={props.choice} />
      <button onClick={() => {props.showAnswer(props.correctIndex)}}>Click for correct answer</button>
    </div>
  );
}

function NextQuestion(props) {
  return <button>Next question</button>;
}

function Answer(props) {
  // let array1 = ["48", "13", "52", "50"]
  // map1 = array1.map(x => <p>{x}</p>);
  return <div>{props.choice.map(x => <div>{x}</div>)}</div>;
}

function App() {

  // Declare state here
  // const {name, setName} = useState(initialValue)
  const [answer, setAnswer] = useState(undefined);

  let currentQuestion = 0;

  // data = [ {.....}, {......}, .....]
  // data.map(x => <Question .... />);
  return (
    <div className="app">
      <Question
        text={data[0].question.text}
        choice={data[0].question.choices}
        showAnswer={setAnswer}
        // correctIndex={}
      />
      <Question
        text={data[1].question.text}
        choice={data[1].question.choices}
        showAnswer={setAnswer}
        // correctIndex={}
      />
      
      <NextQuestion />

    </div>
  );
}

export default App;

/*
## Day 2: Nested components and state

### Goal 1: Render the answer choices from sample_data.json on the screen.

- [X] In App.jsx, create an Answer component.
- [X] Render an instance of `<Answer />` inside of `<Question />`.
- [X] Add props to `<Answer />` with the text "Answer goes here".
  - [X] Pass props for the answer choices into `<Question />`.
  - [X] Use those props to render the Answer components inside `<Question />` to display the answer choices.
- [X] Refactor to use map to map over all answer choices.

>![Day 2.0 goal](https://i.imgur.com/VpA8eRc.png)

### Goal 2: Render a button on the screen that reveals the correct answer when clicked.

- [ ] Add state to `<App />` using the `useState` React hook to keep track of if the question is answered.
- [ ] Add a button to the App component that updates state to `isAnswered` when clicked.
- [ ] Set the state of `isAnswered` to display the correct answer choice.

>![Day 2.5 goal - unanswered](https://i.imgur.com/JI6GroE.png)
>![Day 2.5 goal - answered](https://i.imgur.com/rufYX84.png)

*/
