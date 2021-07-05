import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postProduct} from '../../redux/actions/productActions'
import { Formik, Form, Field } from 'formik';
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
import swal from 'sweetalert';
import { useStyles } from './styles';

const Post = () =>{
    const classes = useStyles();

    const dispatch = useDispatch();
    // const idCountries = useSelector(state => state.idCountries)

    const [loading, setLoading] = useState(false)
    const [loading2, setLoading2] = useState(true)
    const [form, setForm] = useState({
        name: '',
        image: '',
        price: '',
        category: '',
        description: '',
        state: 'Active',    
    })

    const handleInputChange = (event) => {
        
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
        
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(postProduct(form))
        if(form){swal("Produto Publicado!", "Acepte para continuar!", "success")}
        setForm('');
    };

    return (
        <Formik
        initialValues={form}
        enableReinitialize
        //   validationSchema={validationSchema}
        onSubmit={handleSubmit}>
      {
        <Grid container className={classes.root}>
            
            <Form className={classes.root}>
            <Typography className={classes.title}>Completa los datos</Typography>
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
                        name="image"
                        label="Imagen"
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
                    name="price"
                    label="Precio"
                    variant="outlined"
                    className={classes.input}
                    required
                    />
            </FormControl>
            </Grid>

            <Grid className={classes.selectt}>
            <FormControl>
            <InputLabel className={classes.nameCategory} >Categoria</InputLabel>
            <Field
            // 'Remeras', 'Camperas','Zapatillas','Accesorios','Hogar', 'Jardineria'
            
              component={Select}
              onChange={handleInputChange}
              name="category"
              label="Categoria"
              variant="outlined"
              className={classes.select}
              required
            >
             <MenuItem value={'Remeras'}>Remeras</MenuItem>
             <MenuItem value={'Camperas'}>Camperas</MenuItem>
             <MenuItem value={'Zapatillas'}>Zapatillas</MenuItem>
             <MenuItem value={'Accesorios'}>Accesorios</MenuItem>
             <MenuItem value={'Hogar'}>Hogar</MenuItem>
             <MenuItem value={'Jardineria'}>Jardineria</MenuItem>
             </Field>
             </FormControl>
            </Grid>

            <Grid>
            <FormControl>
            <Field
            
              component={TextField}
              onChange={handleInputChange}
              name="description"
              label="Descripcion"
              variant="outlined"
              className={classes.input}
              required
            />
            </FormControl>
            </Grid>
            
        </Grid>
        <Grid className={classes.containerButton}>
            <Button className={classes.button}  onClick={handleSubmit} variant="contained" color='#28B463'>
              Enviar
            </Button>
        </Grid>
        </Form>
            
        </Grid>

      } 

        </Formik>   
    );
        

    





}

export default Post;