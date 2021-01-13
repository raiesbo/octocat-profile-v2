import Intro from "./pages/intro.page";
import User from "./pages/user.page";
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";


function useQuery() {
  return new URLSearchParams(useLocation().search);
}


function App() {
  let query = useQuery();

  return (
    <div className="App">
      <Switch>

        <Route path="/user">
          <User username={ query.get("id") }/>
        </Route>

        <Route path="/">
          <Intro />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
