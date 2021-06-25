import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { singin } from '../../redux/actions/userActions';
import './Singin.css'

//MANEJAR ESTADO! AL IR COMPLETANDO EL FORM
const Singin = () => {

    const [password, setPassword]= useState();
    const [email, setEmail]= useState();

    const dispatch = useDispatch();
    const status = useSelector(state => state.status)
    
    const handleSubmit = (event) =>{
        event.preventDefault();
        dispatch(singin(email, password))

        alert(status); //Ponerle estilo, tratar de no usar alert! 
    }

    const handleEmail = (event) => {
        setEmail(event.target.value)
    };
    const handlePassword = (event) => {
        setPassword(event.target.value)
    };



return (
    <div className='fondo'>
    <form className='formAct' onSubmit={handleSubmit}>
        <span className='tittles'>Iniciar Sesion</span>
        <div className='inputs'> 
            <div className='email'>
                <label>Email:</label>
                <input className='inputName' autoFocus type='email' name='email' onChange={handleEmail} required />
            </div>
            <div className='password'>
                <label>Contraseña</label>
                <input className='inputPassword' type='password' name='password' onChange={handlePassword} required />
            </div>
            <button className='btnAcept' onClick={handleSubmit}>Ingresar</button>
        </div>
                
    </form>
    </div>
)};

export default Singin;