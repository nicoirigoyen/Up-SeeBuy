import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {getProducts} from '../../redux/actions/productActions'
import './Home.css'

const Home = () => {

  const dispatch = useDispatch();
  const product = useSelector((store) => store.productReducers);
  

  useEffect( ()  => {
    dispatch(getProducts());
    
  }, []);
  console.log(product)

    return (
      <div className='ContainerHome'>
        <h1>Productos Destacados</h1>
          {product.product.map( p =>{
           return <h3>{p.name}</h3>})}
      </div>
    )
  };
  
export default Home;
