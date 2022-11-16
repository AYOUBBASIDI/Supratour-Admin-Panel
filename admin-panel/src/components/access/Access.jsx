import './access.css'
import React, { useState , useEffect} from "react";

const Access = props => {
    const pathArray = window.location.pathname.split('/');
    const [access, setAccess] = useState(false);
    const id = pathArray[2];
    useEffect(()=>{

        fetch('http://localhost:5000/api/bsdem/checkToken', 
        {
            method:"POST", 
            body:JSON.stringify({
                "email" : 'ayoubbsd4@gmail.com',
                "token" : id
              }),
            headers: {
                'Access-Control-Allow-Origin':'*',
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
        .then(response => response.json())
        .then(data => {
            if(data){
                sessionStorage.setItem('access', true)
                setAccess(true)
            }
        });
        
    },[])
    
    if(access){

        return (
        <div className='message'>
            <div class="scene">
            <div class="overlay"></div>
            <div class="overlay"></div>
            <div class="overlay"></div>
            <div class="overlay"></div>
            <span class="bg-403">200</span>
            <div class="text">
                <span class="hero-text"></span>
                <span class="msg">Hello <span>Sir</span> again.</span>
            </div>
            <div class="open"></div>
            </div>
            <p className='tolog'>Click to <a href='/'>LogIn</a></p>
        </div>
        )

    }else{
    return (
        <div className='message'>
            <div class="scene">
        <div class="overlay"></div>
        <div class="overlay"></div>
        <div class="overlay"></div>
        <div class="overlay"></div>
        <span class="bg-403">403</span>
        <div class="text">
            <span class="hero-text"></span>
            <span class="msg">can't let <span>you</span> in.</span>
            <span class="support">
            <span>lost?</span>
            <a href="#">contact support</a>
            </span>
        </div>
        <div class="lock"></div>
        </div>
        </div>
        
    )
}
}


export default Access;