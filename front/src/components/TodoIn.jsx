import React from "react";

const TodoIn = () => {
    return (
        <div className="container">
            <h1>Ok You got new task. Enter ASAP !!</h1>
            <form action="">
                <div>
                    <label htmlFor="">Todo Title </label>
                    <input type="text" placeholder="enter title " />
                </div>
                <div>
                    <label htmlFor="">Todo Description </label>
                    <textarea name="" id="" cols="30" rows="10" placeholder="enter description "></textarea>
                </div>
            </form>
            <a href="/todo">Submit</a>
            <a href="/">Cancel</a>
        </div>
    );
};

export default TodoIn;