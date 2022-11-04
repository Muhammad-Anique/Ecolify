import React from 'react'
import Card from '../Card/Card'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setlist } from '../../productlistslice'
import { seturl } from '../../urlSlice'
import './Home.css'
import banner from '../../banner.png'
import Filterbar from '../Filterbar/Filterbar'


const Home = () => {

  const pList = useSelector((state) => state.list.data);
  const url = useSelector((state) => state.url.data);
  const dispatch = useDispatch();




useEffect(() => {
  const fetchProducts = async () => {
    const data = await fetch('https://dummyjson.com/products');
    const prod = await data.json();
    dispatch(setlist(prod.products));
    console.log(pList);
  };
  fetchProducts();
}, []);




useEffect(() => {
  const fetchProducts = async () => {
    const data = await fetch(url);
    const prod = await data.json();
    dispatch(setlist(prod.products));
    console.log(pList);
  };
  fetchProducts();
}, [url]);


function setlink(string){
  console.log('hi');
  dispatch(seturl(string));
  console.log(url);
}

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
          <div className='h'><h2>Category</h2><span className="material-symbols-outlined">category</span></div>
          <div className='c'><p onClick={()=>{setlink('https://dummyjson.com/products/category/skincare')}} >Skincare</p></div>
          <div className='c'><p onClick={()=>{setlink('https://dummyjson.com/products/category/laptops')}} >Laptops</p></div>
          <div className='c'><p onClick={()=>{setlink('https://dummyjson.com/products/category/smartphones')}} >Smartphones</p></div>
          <div className='c'><p onClick={()=>{setlink('https://dummyjson.com/products/category/home-decoration')}}>Home Decoratives</p></div>
          <div className='c'><p onClick={()=>{setlink('https://dummyjson.com/products/category/furniture')}}>Furniture</p></div>     
          <div className='c'><p onClick={()=>{setlink('https://dummyjson.com/products/category/tops')}}>tops</p></div>     
          <div className='c'><p onClick={()=>{setlink('https://dummyjson.com/products/category/mens-shirts')}}>Mens Shirts</p></div>     
          <div className='c'><p onClick={()=>{setlink('https://dummyjson.com/products/category/lighting')}}>Lighting</p></div>     
          <div className='c'><p onClick={()=>{setlink('https://dummyjson.com/products/category/sunglasses')}}>Sunglasses</p></div>  
        </div>
      </div>
      <div className='cont'>
       {pList.map(product => {
        return (<div className='Pcard'><Card hoverable key={product.id} title={product.title} img={product.thumbnail} price={product.price} /></div>);
      })}
    </div>
    </div>
    </>
  )
}

export default Home
