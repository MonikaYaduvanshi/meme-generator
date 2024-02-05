import React, { useEffect, useState } from "react"

export default function Apitest(){
    const [count, setcount] = useState(1);
    const [starWarsData, setStarWarsData] = useState({});

    function add(){
        setcount(c => c + 1);
    }
    useEffect(() => {
        fetch("https://swapi.dev/api/people/" + count)
        .then(res => res.json())
        .then(data => setStarWarsData(data))
        console.log("effect function ran")
    }, [count])

    return (
        <div>
           <h1> My count is {count} </h1>
           <button onClick={add}> Get next character </button>
            <pre> {JSON.stringify(starWarsData, null, 2)} </pre>
        </div>

    )
}