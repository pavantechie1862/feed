import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import UserProfile from "./Components/UserProfile";
import "./App.css";

const App = () => (
  <div className="App-container">
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/user/:id" component={UserProfile} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
