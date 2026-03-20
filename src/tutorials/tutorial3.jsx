import { useState } from "react";

export default function Tutorial3() {
  //hooks are anything that has "use" in it
  const [counter, setCounter] = useState(0);
  //const count = arr[0];
  //const setCount = arr[1];
  //lookup destructuring

/*  
    //we define our state as a json object and setStare replaces the current state object
    const state = {
    count: 0,
    text:undefined
  }
  const [state,setState] = useState(initialState); */


  //event handler
  const handleClick = () => {
    setCounter(counter + 1);
    if (counter == 50) {
      setCounter(0);
    }
  };

  const [text,setText] = useState("");
  const handleInput = (text) => {
    setText(text)
  }

  return (
    <>
      <button onClick={() => handleClick()}>click me</button>
      <p>you clicked me {counter} times</p>
      <input type="text" onChange={({ target: { value } = {}}) => handleInput(value)} />
      <p>{text}</p>
    </>
  );
}
