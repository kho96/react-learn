/*
import Button from "./Button"; //Button.js를 가져온다.
import styles from "./App.module.css";
*/
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("i run all the time");
  const iRunOnlyONce = () => {
    console.log("i run oly once.");
  }
  useEffect(iRunOnlyONce, []);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>click</button>
    </div>
  );
}

export default App;
