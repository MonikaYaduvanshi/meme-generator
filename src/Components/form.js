import { CheckBox } from '@mui/icons-material';
import React from 'react';
import { useState } from "react"

export default function Form(){
    const [formData, setFormData] = useState({
       "email" : "", 
       "password":"", 
       "confirmPassword":"",
       "joinNewsletter": false
    });

    function handleChange(event){
        const {name, value, type, checked} = event.target;
        setFormData(prevData => ({
            ...prevData, [name] : type === "checked" ? checked : value
        }))
    }

    function submitHandler(event){
        event.preventDefault();
        if(formData.password === formData.confirmPassword){
            console.log("Passwords match");
            console.log(formData);
        }
        else{
            console.log("Passwords do not match");
        }
    }

    return(
        <div>
            <form 
                onSubmit={submitHandler}
                className="form"
            >
                <input
                    type="text"
                    placeholder="Enter Email"
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                />
                 <input
                    type="text"
                    placeholder="Enter Password"
                    onChange={handleChange}
                    name="password"
                    value={formData.password}
                />
                <input
                    type="text"
                    placeholder="Confirm Password"
                    onChange={handleChange}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                />
                <input
                    id="checkForNewletter"
                    type="checkbox"
                    name="joinNewsletter"
                    onChange={handleChange}
                    checked={formData.joinNewsletter}
                />
                <label htmlFor='checkForNewletter'>
                    I want to join the newsletter
                </label>
                <button> Sign In </button>
            </form>
            <h>{formData.email}</h>
        </div>
        
    )
}