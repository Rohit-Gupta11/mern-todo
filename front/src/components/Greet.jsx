import React from "react";

const Greet = (props) => {
    const {
        userIn
    } = props;


    return(
        <div>
            <h1>hello { userIn.name }</h1>
            <h1>your grade is going to { userIn.grade } </h1>
        </div>
    );
};

export default Greet;