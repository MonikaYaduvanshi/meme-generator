import React from 'react';
import { useState } from "react"

export default function Message(){

    const [message, setMessage] = useState([""])

    return(
        <div> 
            {message.length === 0 ? <p> No Messages</p> :
            <p> you have {message.length} unread {message.length === 1 ? "meesage" : "messages"}</p>}
        </div>
    )
}