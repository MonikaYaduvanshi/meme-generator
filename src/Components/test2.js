import React from 'react';
import data from '../Data/data.js'
import Box from './box.js'
import { useState } from 'react';

function Boxes(){
    const [boxArray, setBoxArray] = useState(data);
    const boxElements = boxArray.map(box => (
        <Box 
            key={box.id} 
            on={box.on} 
            toggle={toggle}
            unique={box.id}
        />
    ));
    function toggle(ind){
        setBoxArray(prevArray => {
            return prevArray.map((item) => {
                return item.id === ind ? {...item, on:!item.on} : item
            })
        })
    }
    return( 
        <div> 
            <h2> Boxes will go here </h2>
            {boxElements} 
        </div>
    )
}
export default Boxes;