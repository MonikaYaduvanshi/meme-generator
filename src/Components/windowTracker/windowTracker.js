import React, { useEffect, useState } from "react";

export default function Tracker(){
    const [size, setSize] = useState(window.innerWidth)
    useEffect(() => {
        function watchWidth(){
            console.log("setting width");
            setSize(window.innerWidth);
        }
        window.addEventListener("resize", watchWidth)

        return function(){
            console.log("not anymore");
            window.removeEventListener("resize", watchWidth)
        }
    },[])
    return(
        <h1> Inner width : {size} </h1>
    )
}