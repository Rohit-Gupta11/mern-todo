import React from "react";
import "./TodoIn.css";
import { useState } from "react";

const TodoIn = () => {
    const [todoDescription, setDescription] = useState('');
    const [todoTitle, setTitle] = useState('');

    function onSubmitTodo() {
        let dataGain = {
            title: todoTitle,
            description: todoDescription,
            date: Date.now()
        }
        try {
            console.log(dataGain);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="container mg-bt">
            <h1>Ok You got new task. Enter ASAP !!</h1>
            <form action="POST">
                <div className="">
                    <label>Todo Title </label>
                    <input onChange={e => setTitle(e.target.value)} type="text" placeholder="enter title " />
                </div>
                <div className="">
                    <label>Todo Description </label>
                    <textarea onChange={e => setDescription(e.target.value)} cols="30" rows="10" placeholder="enter description "></textarea>
                </div>
            </form>
            <a href="/todo" onClick={onSubmitTodo()}>Submit</a>
            <a href="/">Cancel</a>
        </div>
    );
};

export default TodoIn;