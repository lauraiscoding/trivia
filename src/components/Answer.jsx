import React from "react";

function Answer(props) {
  // let array1 = ["48", "13", "52", "50"]
  // map1 = array1.map(x => <p>{x}</p>);
  return (
    <div>
      {props.choice.map((x,index) => (
       <div> <button onClick={() => {
        props.setUserAnswer(index)
      }} > {x}</button> </div>
      ))}
    </div>
  );
}
export default Answer;