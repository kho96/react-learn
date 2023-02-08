/*
import Button from "./Button"; //Button.js를 가져온다.
import styles from "./App.module.css";
*/
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => {
      setKeyword(event.target.value);
  }
  console.log("i run all the time");
  const iRunOnlyONce = () => {
    console.log("i run oly once.");
  }
  useEffect(iRunOnlyONce, []); // 화면이 실행되고 최초 한 번 실행된다.
  // useEffect function은 rerendering 되더라도 실행되지 않음
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("Search For " ,keyword);
    }
  }, [keyword]); //keyword가 변화할 때 만 실행된다.
  
  return (
    <div>
      <input value={keyword} onChange={onChange}
        type="text" placeholder="Search here..." />
      <h1>{counter}</h1>
      <button onClick={onClick}>click</button>
    </div>
  );
}

export default App;
