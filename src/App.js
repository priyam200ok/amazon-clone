import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route to="/login"></Route>
        <Route to="/"></Route>
      </Switch>
    </Router>
  );
}

export default App;
