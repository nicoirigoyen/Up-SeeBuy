import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';

import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';


import { getNameProduct } from '../../redux/actions/productActions';

import { useStyles } from './styles';
import { InputAdornment } from '@material-ui/core';



const SearchBar = () => {

    const dispatch = useDispatch();
    const classes = useStyles();
    
    
    const [query, setQuery] = useState('');
    const productName = useSelector((store) => store.productReducers);
    
    


    const handleSearchInputChange = (event) => {
        event.preventDefault();
        setQuery(event.target.value);
        dispatch(getNameProduct(query)); 
      };
    
   

return (
        <Container className={classes.root}>
            
            <FormControl className={classes.searchBar}>                
                <TextField
                        id="query"
                        placeholder="Busqueda de producto"
                        className={classes.searchField}
                        value={query}
                        onInput={handleSearchInputChange}
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position="start"><SearchIcon/></InputAdornment>
                        ),
                        }}
                    />
            </FormControl>
            
        </Container>

      )
}

export default SearchBar;


