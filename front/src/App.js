import React from "react";
import {
    BrowserRouter as Router,
    Switch, Route
  } from "react-router-dom";
import "./App.css"
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import TodoWindow from "./components/todo/TodoWindow";

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