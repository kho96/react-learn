/* BrowserRouter - 우리가 흔히 사용하는 URL형식
  HashRouter - URL앞에 #가 들어감.
*/
import {
  BrowserRouter as Router, 
  Switch,
  Route,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return <Router>
      <Switch>
        {/*:id라고 해야한다.(id만하면 text, :id-id를 받는다.)*/}
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/"> 
          {/* 유저의 경로가 "/"라면 Home.js를 보여준다. */}
          <Home />
        </Route>
      </Switch>
    </Router>;
}

export default App;
