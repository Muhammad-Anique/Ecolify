import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {setcartClick} from '../../cartClick'
import './Navbaar.css'
const Navbaar = () => {


  const cartIsClick = useSelector((state) => state.cartClick.data );
  const dispatch = useDispatch();

  function cartclick(){
    if(cartIsClick==0){
      console.log("0 clicked 1");
     dispatch(setcartClick(1));
    }
    else{
      console.log("1 clicked 0");
      dispatch(setcartClick(0));
    }

    console.log(cartIsClick);

  }

  return (
    <div className='Navbaar'>
        <div className='NavContainer'>
            <div className='At' onClick={()=>{cartclick()}}><span className="material-symbols-outlined">shopping_bag</span></div>
            <div className='logo'><h1>Ecolify</h1></div>
            <div style={{display:"flex"}}>
            <div className='At'><span className="material-symbols-outlined"></span></div>
            
            </div>
        </div>    
    </div>
  )
}

export default Navbaar
