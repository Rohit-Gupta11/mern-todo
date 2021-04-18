import React from "react";
import "./todo.css";
import { Link } from "react-router-dom";

const api_key = `http://localhost:4000/todo`;

const TodoIn = () => {
    return (
        <div className="container mg-bt">
            <h1>Ok You got new task. Enter ASAP !!</h1>
            <form action={`${api_key}/create-todo`} method="post">
                <div className="">
                    <label>Todo Title </label>
                    <input name="todotitle" type="text" placeholder="enter title " />
                </div>
                <div className="">
                    <label>Todo Description </label>
                    <textarea name="tododescription" id="" cols="30" rows="10" placeholder="enter description "></textarea>
                </div>
                <input type="submit">Submit</input>
                <Link to="/">Cancel</Link>
            </form>
        </div>
    );
};

export default TodoIn;