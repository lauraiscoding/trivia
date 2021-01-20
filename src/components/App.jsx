import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function Question(props) {
  return <div> {props.text}</div>;
}

function App() {
  let currentQuestion = 0;

  return (
    <div className="app">
      <Question text={data[0].question.text} />
      <Question text={data[1].question.text} />
    </div>
  );
}

export default App;

/*

Goal 1: Render a question from sample_data.json on the screen.

- [X] In App.jsx in the App component,
      add a variable to set the current question number to 0.
- [X] In App.jsx, create a Question component.
- [X] Add props to `<Question />` with the text "Question goes here".
- [X] Render `<Question />` inside of App.
- [ ] Replace "Question goes here" with the `question.text` field found
      in data for the first question.
- [ ] BONUS: Add styling to your app.

*/
