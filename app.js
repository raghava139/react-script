// const { React } = window;
// const { ReactDOM } = window;
// const { useState } = React;

// function Component1() {
//   const [ state,setState] =useState(0);
//   console.log(state)
//   return (
//     <div>
//       <h1>Component 1</h1>
//       <Component2 myfile={state}/>
//     </div>
//   );
// }

// function Component2(myfile) {
//   console.log('myf',myfile.myfile);
//   return <h2>Component{myfile.myfile}</h2>;
// }
// ReactDOM.render(
//   <div>
//     <Component1 />
//     <Component2 />
//   </div>,
//   document.getElementById("root")
// );

const { React, ReactDOM } = window;
const { useState } = React;
const { Component2 } = window;

function Component1() {
  const [state, setState] = useState(1000);
  return (
    <div>
      <h1>Component 1</h1>
      <button onClick={() => setState(state + 1)}>TEST-INC</button>
      <Component2 myfile={state} />
    </div>
  );
}
ReactDOM.render(
  <div>
    <Component1 />
  </div>,
  document.getElementById("root")
);
