import React from "react";
import "./TodoIn.css";

const TodoIn = () => {
    return (
        <div className="container mg-bt">
            <h1>Ok You got new task. Enter ASAP !!</h1>
            <form action="POST">
                <div className="">
                    <label>Todo Title </label>
                    <input className="" type="text" placeholder="enter title " />
                </div>
                <div className="">
                    <label>Todo Description </label>
                    <textarea className="" name="" id="" cols="30" rows="10" placeholder="enter description "></textarea>
                </div>
            </form>
            <a href="/todo">Submit</a>
            <a href="/">Cancel</a>
        </div>
    );
};

export default TodoIn;