import React from "react";
import {
    BrowserRouter as Router,
    Switch, Route
  } from "react-router-dom";
import "./App.css"
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import {TodoWindow, TodoEdit, TodoIn} from "./components/todo";


const App = () => {
    return(
        <>
            <Router>
                <NavBar/>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact path="/todo">
                        <TodoWindow/>
                    </Route>
                    <Route exact path="/todo/create-todo">
                        <TodoIn/>
                    </Route>
                    <Route exact path="/todo/edit-todo">
                        <TodoEdit/>
                    </Route>
                </Switch>
            </Router>
        </>
    );
};

export default App;