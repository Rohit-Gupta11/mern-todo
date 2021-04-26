import React, { useState } from "react";
import "./todo.css";
import Axios from "axios";

const TodoIn = (props) => {
    const {
        userId,
        setIsloaded
    } = props;

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const titleIn = document.getElementById("titleIn");
    const descriptionIn = document.getElementById("descriptionIn");

    function sendData() {
        Axios.post("http://localhost:4000/todo/create-todo", {
            userId: userId,
            title: title,
            description: description
        });
        titleIn.value = "";
        descriptionIn.value = "";
        setIsloaded(true);
    }

    return (
        <div>
            <label>Title</label>
            <input type="text" id="titleIn" onChange={(e) => setTitle(e.target.value)} />
            <label>Description</label>
            <textarea id="descriptionIn" name="description" cols="30" rows="10" onChange={(e) => setDescription(e.target.value)}></textarea>
            <button onClick={sendData}>Done</button>
        </div>
    );
};

export default TodoIn;