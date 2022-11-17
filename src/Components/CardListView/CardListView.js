import { hover } from '@testing-library/user-event/dist/hover'
import React, {component} from 'react'
import { useState } from 'react'
import ReactHover from 'react-hover'
import './CardListView.css'

const Card = (props) => {


  var cclass = 'Card1'; 
  return (

    <div className={cclass}>
      <img className='image1' src={props.img} alt="" />
      <div className='desclist'>
      <h1 className='mb'>{props.title}</h1>
      <p className='mb'>{props.descrip}</p>
      <h3 className='mb'>Price : ${props.price}.00</h3>
      <h3 className='mb'>Rating : {props.rating}</h3>
      <p className='brand mb'>{props.brand}</p>
      <h5 className='mb discount'>{props.discount}% off</h5>
   
      </div>
    </div>
  )
}

export default Card
