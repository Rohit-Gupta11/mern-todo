import React from 'react';

const Form = () => {

    function sendData(){
        const dataIn = document.getElementById('data-in');
    }


    return(
        <div>
            <input id="data-in" className="data-in" type="text" placeholder="write here "/>
            <button type="submit" onClick={sendData()} >Submit</button>
        </div>
    );
};

export default Form;