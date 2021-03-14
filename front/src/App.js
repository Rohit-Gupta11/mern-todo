import React from "react";
import {
    BrowserRouter as Router,
    Switch, Route
  } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import TodoWindow from "./components/TodoWindow";

const App = () => {
    return(
        <>
            <Router>
                <NavBar/>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/todo">
                        <TodoWindow/>
                    </Route>
                </Switch>
            </Router>
        </>
    );
};

export default App;