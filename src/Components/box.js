import '../Styles/style.css'
import React from 'react';
import { useState } from 'react';
import Boxes from './test2';

export default function Box(props){
    const Styles = {
        "backgroundColor" : props.on ? "#000" : "#fff"
    }
    return(
        <div class="box" style={Styles} onClick={ () => props.toggle(props.unique)}> </div>
    )
};