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
        <Route path="/movie">
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
