import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import NavBar from "./Components/NavBar";
import ListOfTables from "./Pages/ListOfTables/";
import AddNew from "./Pages/AddNew";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={ListOfTables} />
            <Route exact path="/addNew" component={AddNew} />
          </Switch>
          {/* <Footer /> */}
        </div>
      </Router>
    );
  }
}

export default App;
