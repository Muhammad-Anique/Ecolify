import React from 'react'
import Card from '../Card/Card'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setlist } from '../../productlistslice'
import './Home.css'

const Home = () => {

  const pList = useSelector((state) => state.list.data)
  const dispatch = useDispatch()

const url ='https://dummyjson.com/products';

useEffect(() => {
  fetchProducts();
}, []);

const fetchProducts = async () => {
  const data = await fetch(url);
  const prod = await data.json();
  dispatch(setlist(prod.products));
  console.log(pList);
};


  return (
    <div className='cont'>
       {pList.map(product => {
        return (<Card hoverable key={product.id} title={product.title} img={product.thumbnail} price={product.price} />);
      })}
    </div>
  )
}

export default Home
