import React from "react";
import { useEffect, useState } from "react";
import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux'
import swal from 'sweetalert2'
import { singin } from '../../redux/actions/userActions'
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



export default function Login() {
    const classes = useStyles();
    const [input, setInput] = useState({
        email: '',
        password:''
    });
    const dispatch = useDispatch();
    const status = useSelector(state => state.userReducers.status)
    
    const [password, setPassword]= useState();
    const [email, setEmail]= useState();

    // function handleChange(e){
    // setInput({
    //     ...input,
    //     [e.target.name] : e.target.value
    //     })
    // }
    function handleSubmit(e){
    e.preventDefault();
    dispatch(singin(email, password))
    alert(status)
    setInput('');
    }
    const handleEmail = (event) => {
        setEmail(event.target.value)
    };
    const handlePassword = (event) => {
        setPassword(event.target.value)
    };

    return(
        <Formik
        // initialValues={form}
        enableReinitialize
        //   validationSchema={validationSchema}
        onSubmit={handleSubmit}>
      {
        <Grid container className={classes.root}>
            
            <Form className={classes.root}>
            <Typography className={classes.title}>BIENVENIDO</Typography>
            <Grid container spacing={2} className={classes.gridContainer}>
                <Grid>
                <FormControl>
                    <Field
                    component={TextField}
                    onChange={handleEmail}
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
                        onChange={handlePassword}
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
        <Button className={classes.button} onClick={handleSubmit} variant="contained" color="primary">
              Continuar
            </Button>
        </Grid>
        </Form>
     </Grid>

      } 

        </Formik>
)};