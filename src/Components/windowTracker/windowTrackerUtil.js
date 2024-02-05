import React, { useState } from "react";
import Tracker from "./windowTracker";

export default function Window(){
    const [show, setShow] = useState(true);
    function handleClick(){
        setShow(show => !show);
    }
    return(
        <div>
            <button onClick={handleClick}>Toggle Window Tracker</button>
            { show && <Tracker/>}
        </div>
    )
}