
import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("created :)");
    return () => console.log("destroyed :("); //컴포넌트 삭제 시(클린업 함수)
  }, []); // 컴포넌트 생성 시 실행
  return (
    <h1>Hello</h1>
  );
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev)
  return (
    <div>
      {showing ? <Hello /> : null}
      <button
        onClick={onClick}
      >{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
