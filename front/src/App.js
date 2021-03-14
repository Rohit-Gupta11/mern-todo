import React, { useState, useEffect } from "react";
import Greet from "./components/Greet";
import Form from "./components/Form";

const App = () => {

    const BASE_URL = 'http://localhost:4000'
    const [getUser, setUser] = useState({});

    useEffect(()=>{
        fetch(BASE_URL + '/info')
        .then((res) => res.json())
        .then((data) => {
            setUser(data);
            console.log(data);
        })
    }, []);

    return(
        <>
        <Greet userIn = { getUser}/>
        <Form/>
        </>
    );
};

export default App;