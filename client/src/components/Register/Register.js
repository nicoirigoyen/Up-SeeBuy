import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../../redux/actions/index'
import './Register.css'
const Register = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users)
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        email: '',
        name: '',
        lastname: '',
        password: '',
    })
    
    console.log(users)
    // useEffect(() => {
    //     dispatch(getCountries())
    //     setLoading(true)
    //   }, []);

   
      


    const handleInputChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    };

    
    const handleSubmit = (event) => {
        console.log(users)
        event.preventDefault();
        dispatch(register(form))
        .then(()=>alert('Bienvenido'))
        event.target.value = ""; 
    };
return (
    <div className='fondo'>
    <form className='formRegister' onSubmit={handleSubmit}>
        <span className='tittle'>Registrarse</span>
        <div className='inputs'>
            <div className='name'>
                <label>Nombre:</label>
                <input className='inputName' autoFocus type='text' name='name' onChange={handleInputChange} required />
            </div>
            <div className='lastname'>
                <label>Apellido:</label>
                <input className='inputLastname' type='text' name='lastname' onChange={handleInputChange} required />
            </div>
            <div className='email'>
                <label>Email:</label>
                <input className='inputEmail' type='text' name='email' onChange={handleInputChange} required />
            </div>
            <div className='password'>
                <label>Contraseña: </label>
                <input className='inputPassword' type='password' name='password' onChange={handleInputChange} required />
            </div>
            <button className='btnRegister' onClick={handleSubmit}>Registrarse</button>
        </div>         
    </form>
    
     

</div>
)};

export default Register;