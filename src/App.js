import "./App.css";
import React from "react";
import NewPlace from "./places/pages/NewPlace";
import User from "./user/pages/User";
import { BrowserRouter as Router , Switch, Redirect, Route} from 'react-router-dom';
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <User/>
        </Route>
        <Route path="/places/new" exact>
          <NewPlace/>
        </Route>
        <Redirect to ="/"/>

      </Switch>
      
    </Router>
  );
};

export default App;
