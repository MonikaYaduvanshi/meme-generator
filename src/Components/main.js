import React, { useEffect } from 'react';
import '../Styles/style.css'
import { useRef, useState } from 'react';
import image from './image';

export default function Main(props){

    const [meme, setMeme] = useState({
        "topText" : "",
        "bottomText" : "",
        "randomImage": "https://imgflip.com/s/meme/Grumpy-Cat-Not-Amused.jpg",
    })
    const [memeArray, setMemeArray] = useState({});
    
    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
        .then(res => res.json())
        .then(data => setMemeArray(data.data.memes))
    },[])

    const submitHandler = (event) => {
        event.preventDefault();
        const rndIndex = Math.floor(Math.random() * memeArray.length);
        console.log(memeArray[rndIndex])
        setMeme(prevData =>({
            ...prevData, 
            randomImage: memeArray[rndIndex].url
        }))
        // document.getElementById("memeForm").reset();
    }
    function handleChange(event){
        setMeme(prevData => ({
            ...prevData, [event.target.name] : event.target.value
        }))
    }
    
    console.log(props.darkmode);
    return(
        <div className={props.darkmode ? "main--dark" : "main"}>
            <div className="texts">
            <form 
                onSubmit={submitHandler}
                id="memeForm">
                <input 
                    type="text"
                    className="toptext"
                    name="topText"
                    placeholder="Shut Up"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    className="buttomtext" 
                    name="bottomText" 
                    placeholder="And take my money"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button className="buttonStyle" type="submit"> Get a new meme image <span> 🖼️</span></button>
            </form>
            </div>

            <div className="meme">
                <h3 className="memeTopText">{meme.topText}</h3>
                <img src={meme.randomImage} className="memeImage"/>
                <h1 className="memeButtomText">{meme.bottomText}</h1>
            </div> 
        </div>
    )
}