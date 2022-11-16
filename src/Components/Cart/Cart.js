import React from 'react'
import './Cart.css'
import { useSelector } from 'react-redux';


const Cart = () => {
 
       
 const total = useSelector((state)=>state.Total.data);
 const cartlist = useSelector((state) => state.cartlist.data );
 const cartIsClick = useSelector((state) => state.cartClick.data );
var dpmode;
 if(cartIsClick==1)
 {
  dpmode="flex";
 }
 else
 {
    dpmode="none";

 }
  return (
    <div className='Cart' style={{display : `${dpmode}`}}>
        <div>
            <h2 className='shopping_desc'>Shopping Cart</h2>
        </div>



        {cartlist.map(item => {
        return (

            <div className="cart_block">
            <div className='Desc_block'>
            <img className='shimg' src={item.Image} alt="" />
            <div className='Desc_sh'>
            <h3>{item.Name}</h3>
            <p>{item.ItemDesc}</p>
            <p>${item.Price}.00</p>
            </div>
            </div>
            <div className='Quantity'>
                <h1>x{item.Quantity}</h1>
            </div>
        </div>

        );
      })}


        <div className='Total_Block'>
            <h3 style={{marginBottom:"10px", color:"#2d7fc5"}}>Total = ${total}.00</h3>
            <button className='chkbtn'>Proceed to Checkout</button>
        </div>
    </div>
  )
}

export default Cart
