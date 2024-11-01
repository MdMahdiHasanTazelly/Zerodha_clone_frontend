import React from 'react';
import './Signup.css';
import {useState} from 'react';
import axios from 'axios';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userExistance, setUserExistance] = useState(false);

    const closePopup = ()=>{
        setUserExistance(false);
    }

    const handleSubmit = (event)=>{
        
        axios.post("http://localhost:3002/signUp", {email, password})
        .then( (res)=>{
            console.log(res.status);
            //checks the status code. if 201, user is new and brings user in dashboard
            if(res.status === 201){
                setTimeout(()=>{
                    window.location.href = "http://localhost:3000/";
                },500);
            //if 202, shows user a pop up, that the user exist & stays the user in signup page
            }else if(res.status === 202){
                setUserExistance(true);
            }
        })

        event.preventDefault();
        setEmail("");
        setPassword("");
    }

    return ( 
        <div className='signup-container'>
            <h2>Sign Up</h2>
            <form className='signup-form' onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input
                    type='email'
                    id='email'
                    value={email}
                    required
                    onChange={(e)=> setEmail(e.target.value)}
                />

                <label htmlFor='password'>Password:</label>
                <input
                    value={password}
                    type='password'
                    id='password'
                    required
                    onChange={(e)=> setPassword(e.target.value)}
                />
                <button type="submit">Sign Up</button>
            </form>
            {userExistance && 
            <div className='popup'>
                <div className='popup-content'>
                    <p>The user already exists!</p>
                    <button onClick={closePopup}>Close</button>
                </div>
            </div>
            }
        </div>
    );
}

export default Signup;