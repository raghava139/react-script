const { React } = window;
const { useState, memo } = React;

function Component2(props) {
  console.log("repeat");
  return <h2>Component2 {props.myfile}</h2>;
}