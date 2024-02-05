import React from 'react';
import '../Styles/style.css'
import trollface from '../Images/trollface.png'

export default function Nav(props){

    function handlClick(){

        props.toggleDarkmode();

        // console.log(props.theme)
        // if (props.theme.theme === "light"){
        //     props.theme.setTheme("dark");
        // } else{
        //     props.theme.setTheme("light");
        // }
    }
    
    return(
        <div className={props.darkmode === true ? "nav--dark" : "nav"}>
            <img className="imgStyle" src={trollface}/>
            <h1 className="nav--heading">Meme Generator</h1>
            <button className="nav--login" onClick={handlClick}></button>
        </div>
    )
}