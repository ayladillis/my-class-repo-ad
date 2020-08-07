import React from "react";

const name = "Ayla";
const num1 = 4;
const answer = "awesome and applicable for many uses";

function JSXVariables() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          <h1>Hi! My name is {name}</h1>
          <h2>My name has {num1} letters</h2>
          <h2>I think React {answer}</h2>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;

