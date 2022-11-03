import React from 'react'
import Card from '../Card/Card'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setlist } from '../../productlistslice'
import './Home.css'
import banner from '../../banner.png'
import Filterbar from '../Filterbar/Filterbar'

const Home = () => {

  const pList = useSelector((state) => state.list.data)
  const dispatch = useDispatch()

const url ='https://dummyjson.com/products';

useEffect(() => {
  const fetchProducts = async () => {
    const data = await fetch(url);
    const prod = await data.json();
    dispatch(setlist(prod.products));
    console.log(pList);
  };
  fetchProducts();
}, [pList, dispatch]);




  return (
    <>
    <div className='Header'>
    <div>
      <img className='banner' src={banner} alt="" />
    </div>  
    <Filterbar/>
    </div>

    <div className='Product'>
      <div className='sidebaar'>
        <div className='cate'>
          <div className='h'><h2>Category</h2><span class="material-symbols-outlined">category</span></div>
          <div className='c'><p>Home Aplliances</p></div>
          <div className='c'><p>Clothes</p></div>
          <div className='c'><p>Beauty products</p></div>
          <div className='c'><p>Electronics</p></div>
          <div className='c'><p>Home Decoratives</p></div>
          <div className='c'><p>Mobile Phones</p></div>     
        </div>
      </div>
      <div className='cont'>
       {pList.map(product => {
        return (<Card hoverable key={product.id} title={product.title} img={product.thumbnail} price={product.price} />);
      })}
    </div>
    </div>
    </>
  )
}

export default Home
