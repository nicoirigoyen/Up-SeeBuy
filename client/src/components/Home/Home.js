import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardProduct from '../Card/CardProduct'
import {getProducts} from '../../redux/actions/productActions'
import './Home.css'

const Home = () => {

  const dispatch = useDispatch();
  const product = useSelector((store) => store.productReducers);
  

  useEffect( ()  => {
    dispatch(getProducts());
    
  }, []);
 

    return (
      <div className='ContainerHome'>

          {product.product.map( p =>{
           return <CardProduct product={p} />})}
      </div>
    )
  };
  
export default Home;
