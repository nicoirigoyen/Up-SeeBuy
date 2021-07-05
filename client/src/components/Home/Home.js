import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardProduct from '../Card/CardProduct'
import {getProduct} from '../../redux/actions/productActions'
import './Home.css'
import SearchBar from "../SearchBar/SearchBar";
import { Container } from "@material-ui/core";

const Home = () => {

  const dispatch = useDispatch();
  const product = useSelector((store) => store.productReducers);
  const productName = useSelector((store) => store.productReducers.productName);
  
  useEffect ( ()   => {
     dispatch(getProduct());
  }, []);
 

    return (
      <>
      <SearchBar/>
      {productName?.length ? 
      <div className='ContainerHome'>
        {productName.map( p =>{
           return <CardProduct product={p}/>})}
      </div>
      :
      <div className='ContainerHome'>
          {product.product.map( p =>{
           return <CardProduct product={p} />})}
      </div>}
      </>
    )
  };
  
export default Home;
