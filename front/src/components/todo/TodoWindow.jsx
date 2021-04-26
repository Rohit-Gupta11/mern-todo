import React, { useEffect, useState } from "react";
import "./todo.css";
import Axios from "axios";
import TodoIn from "./TodoIn";
import { useHistory } from "react-router-dom";

const List = (props) => {
    const {
        todoId,
        title,
        description,
        setIsloaded
    } = props;

    function deleteTodo() {
        Axios.delete(`http://localhost:4000/todo/todo-delete/${todoId}`)
        setIsloaded(true);
    }

    return (
        <div>
            <label>{title}</label>
            <p>{description}</p>
            <button onClick={deleteTodo} >Delete</button>
        </div>
    );
}

const TodoWindow = () => {
    const [user, setUser] = useState();
    const [data, setData] = useState([]);

    let history = useHistory();

    const [isloaded, setIsloaded] = useState(false);

    Axios.defaults.withCredentials = true;

    useEffect(() => {
        Axios.get("http://localhost:4000/user/login").then((response) => {
            if (response.data.loggedIn === true) {
                setUser(response.data.user._id);
                document.title = "Welcome!";
            } else {
                history.push('/register');
            }
        });
    }, [history]);

    useEffect(() => {
        Axios.get(`http://localhost:4000/todo/todo-list?userId=${user}`).then((response) => {
            setData(response.data);
            setIsloaded(false);
        })
    }, [user, isloaded]);

    return (
        <div className="container">
            <h1>DASHBOARD</h1>
            <TodoIn isloaded={isloaded} setIsloaded={setIsloaded} userId={user} />
            {
                data &&
                data.map((item) => {
                    return <List key={item._id} setIsloaded={setIsloaded} todoId={item._id} title={item.title} description={item.description} />
                })
            }
        </div>
    );
};

export default TodoWindow;