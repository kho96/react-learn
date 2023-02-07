import Button from "./Button"; //Button.js를 가져온다.
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcome back!!</h1>
      <Button text={"Countinue"} />
    </div>
  );
}

export default App;
