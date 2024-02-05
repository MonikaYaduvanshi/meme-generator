import React from 'react';
import { useState } from 'react';

export default function Test(){
    const [thingsArray, setThingsArray] = useState(["thing 1", "things 2"]);
    function Add(){
        setThingsArray(prevThingsArray => {
            return [...prevThingsArray, `things ${thingsArray.length+1}`]
        });
        console.log(thingsArray);
    }
    const thingsElement = thingsArray.map(thing => <p key={thing}>{thing}</p>);
    return(
        <div>
            <button onClick={Add}> Add things </button>
            {thingsElement}
        </div>
    )
}