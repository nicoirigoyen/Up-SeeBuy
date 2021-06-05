import React from "react";
import { useEffect, useState } from "react";


export default function Login() {
    const [input, setInput] = useState({
        email: '',
        password:''
    });
    

    function handleChange(e){
    setInput({
        ...input,
        [e.target.name] : e.target.value
        })
    }
    function handleSubmit(e){
    e.preventDefault();
    setInput('');
    }

    return(
        
        <div className='form'>
            
            <form  onSubmit={(e) => handleSubmit(e)}>
            
            
                <div className='login'>
                <p className='titulo'>BIENVENIDO</p>
                <div className='labelusername'>
                <label>Username</label>
                </div>
                    
                    <input
                    value= {input.username}
                    type='text'
                    placeholder='Username'
                    name="username"
                    id= "username"
                    onChange={(e) => handleChange(e)}
                    className='inputUsername'
                    />
                    
                <div className='labelpassword'>
                <label>Password</label>
                    </div>  
                    
                    <input
                    value= {input.password}
                    type='text'
                    placeholder='Password'
                    name="password"
                    id= "password"
                    onChange={(e) => handleChange(e)}
                    className='inputUsername'
                    />
                    
                    <div>
                <button className='btnLogin' type="submit">LOGIN</button>
                    </div>
                </div>
            </form>
        </div>
        
    );





}