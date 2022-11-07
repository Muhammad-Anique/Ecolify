import React from 'react'
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import './Product.css'


const Product = (props) => {

    var url = window.location.href;
    var id = url.slice(33);
    var b = 0;
    const [product, setProduct]=useState('\0');
    const [images, setImages] =useState([]);

useEffect(()=>{

    const fetchProducts = async () => {
        const data = await fetch(`https://dummyjson.com/products/${id}`);
        const prod = await data.json();
        setProduct(prod);
        setImages(prod.images);
        console.log(product);
        console.log(images);
      };

      fetchProducts();

},[])

  return (
    <div>
        <div>
            <p className='category'>Category {product.category}</p>
        </div>

        <div className='page'>
       
       <div className='imageBlock'>

        <div >
        <tbody className='imgArray'>
        {images.map((object, i) => <img className='i' src={object} key={i++} />)}
       </tbody>
       </div>

       <div>
      <img src={product.thumbnail} alt="" />
      </div>

      </div>


      
      <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <h5>{product.price}</h5>
      <h5>{product.rating}</h5>
      </div>
       </div>


      
    </div>
  )
}

export default Product
