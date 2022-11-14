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
    const [bigpic, setbigpic] =useState('\0');

    const [counter, setCounter] = useState(0)
  
  // Function is called everytime increment button is clicked
  const inc = () => {
    // Counter state is incremented
    setCounter(counter + 1)
  }
  
  // Function is called everytime decrement button is clicked
  const dec = () => {
    // Counter state is decremented
    if(counter>0)
    setCounter(counter - 1)}

useEffect(()=>{

    const fetchProducts = async () => {
        const data = await fetch(`https://dummyjson.com/products/${id}`);
        const prod = await data.json();
        setProduct(prod);
        setImages(prod.images);
        setbigpic(prod.thumbnail);
        console.log(prod.thumbnail);
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
        {images.map((object, i) => <img className='i' onClick={()=>{setbigpic(images[i-1])}} src={object} key={i++} />)}
       </tbody>
       </div>

       <div>
      <img className="Thumbnail" src={bigpic} alt="" />
      </div>

      </div>

      <div className="desc">
      <h1>{product.title}</h1>
      <p className='ele'>{product.description}</p>
      <h4 className='ele'>Rating : {product.rating}</h4>
      <h2 className='ele cl'>${product.price}</h2>


      <div style={{marginBottom:'10px', marginTop:'20px', display:"flex" }}>
      <button className='inc_dec_button' onClick={dec}>-</button>
      <h2 style={{color: "#2d7fc5",marginLeft:"10px", marginRight:"10px" ,height:"35px",width:"45px",border:"1px solid #2d7fc5",textAlign:"center", justifyItems:"center"}}>{counter}</h2> 
      <button className='inc_dec_button' onClick={inc}>+</button>
      </div>

      <button className='wish'>Add to Wish List</button>

      </div>
  
       </div>


      
    </div>
  )
}

export default Product
