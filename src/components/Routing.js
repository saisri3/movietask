import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { createMemoryHistory } from "history";
import Home from "./Home";
// import WebPages from "./components/WebPages/WebPages";
import ViewFilm from "./IndividualFilm/ViewFim";
const history = createMemoryHistory();
export default class Routing extends Component {
  render() {
    console.log("history", history);
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home" component={Home} />
          <Route path="/films" component={ViewFilm} />
        </Switch>
      </BrowserRouter>
    );
  }
}
