import React from "react";
import {
    BrowserRouter as Router,
    Switch, 
    Route
  } from "react-router-dom";
import "./App.css"
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import TodoIn from "./components/todo/TodoIn";
import TodoEdit from "./components/todo/TodoEdit";
import TodoWindow from "./components/todo/TodoWindow";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

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
                    <Route exact path="/register">
                        <Register/>
                    </Route>
                    <Route exact path="/login">
                        <Login/>
                    </Route>
                </Switch>
            </Router>
        </>
    );
};

export default App;