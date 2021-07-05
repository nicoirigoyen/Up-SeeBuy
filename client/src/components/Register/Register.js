import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../../redux/actions/userActions';
import { Formik, Form, Field } from 'formik';
import swal from 'sweetalert2'
import { TextField, Select, CheckboxWithLabel } from 'formik-material-ui';
import {
    Grid,
    InputAdornment,
    Typography,
    Button,
    MenuItem,
    InputLabel,
    FormControl,
  } from '@material-ui/core';

import { useStyles } from './styles';


const Register = () =>{
    const classes = useStyles();
    const dispatch = useDispatch();
       const [form, setForm] = useState({
        email: '',
        name: '',
        lastname: '',
        password: '',
    })
    

    const handleInputChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    };

    function handleSubmit(e){
    e.preventDefault();
    dispatch(register(form))
    if(form)
    {swal.fire("Bienvenido!", "Clickea el boton para continuar!", "success")}
    else{swal.fire('Oops...', 'Something went wrong!', 'error')}
    setForm('');

    }

    return(
        <Formik
        // initialValues={form}
        enableReinitialize
        //   validationSchema={validationSchema}
        onSubmit={handleSubmit}>
      {
        <Grid container className={classes.root}>
            
            <Form className={classes.root}>
            <Typography className={classes.title}>Completa tus datos</Typography>
            <Grid container spacing={2} className={classes.gridContainer}>
            <Grid>
                <FormControl>
                    <Field
                    component={TextField}
                    onChange={handleInputChange}
                    name="name"
                    label="Nombre"
                    variant="outlined"
                    className={classes.input}
                    required
                    />
                </FormControl>
                </Grid>

                <Grid>
                <FormControl>
                    <Field
                    component={TextField}
                    onChange={handleInputChange}
                    name="lastname"
                    label="Apellido"
                    variant="outlined"
                    className={classes.input}
                    required
                    />
                </FormControl>
                </Grid>

                <Grid>
                <FormControl>
                    <Field
                    component={TextField}
                    onChange={handleInputChange}
                    name="email"
                    label="Correo Electronico"
                    variant="outlined"
                    className={classes.input}
                    required
                    />
                </FormControl>
                </Grid>

                <Grid>
                <FormControl>
                    <Field
                        component={TextField}
                        onChange={handleInputChange}
                        name="password"
                        label="Contraseña"
                        type="password"
                        variant="outlined"
                        className={classes.input}
                        required
                    />
                    </FormControl>
                </Grid>

      
            
        </Grid>
        <Grid className={classes.containerButton}>
        <Button className={classes.button} onClick={handleSubmit} variant="contained" color="secondary">
              Enviar
            </Button>
        </Grid>
        </Form>
     </Grid>

      } 

        </Formik>
)};
export default Register;