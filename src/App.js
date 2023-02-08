
import { useState, useEffect } from "react";


function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => {setToDo(event.target.value)};
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === "") {
      return;
    }
    
    // toDos.push()하지 않는다. state를 직접 수정X
    setToDos((currentArray) => [toDo, ...currentArray]);
    // ...[] - 배열 복사
    setToDo("");
  };
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text" placeholder="Write your to do...."/>
          <button>Add To Do</button>
      </form>
      <hr />
      {/* 
        map함수는 Array 안의 item을 가져와 코드를 실행함.
        첫번째 argument는 value, Array안의 item을 의미,
        두번째 argument는 index, 단순한 숫자
      */}
      <ul>
        {/* li를 사용하면 key값이 존재해야한다. */}
        {toDos.map((item, index) => 
          <li key={index}>{item}</li
        >)}
      </ul>
    </div>
  );
}

export default App;
