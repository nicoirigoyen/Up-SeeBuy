import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {getProducts} from '../../redux/actions/productActions'
import './Home.css'

const Home = () => {

  const dispatch = useDispatch();
  const product = useSelector(store => store.product);
  
  useEffect(() => {
    dispatch(getProducts());
  }, []);


    return (
      <div className='ContainerHome'>
      <h1>Productos Destacados</h1>
      {product.map( p =>{
        <h3>{p.name}</h3>
      })}
      </div>
    )
  };
  
export default Home;
