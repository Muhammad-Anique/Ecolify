import { hover } from '@testing-library/user-event/dist/hover'
import React, {component} from 'react'
import { useState } from 'react'
import ReactHover from 'react-hover'
import './Card.css'

const Card = (props) => {


  var cclass = 'Card'; 
  return (

    <div className={cclass}>
      <img className='img' src={props.img} alt="" />
      <div className='desc'>
      <h5 className='desc_title'>{props.title}</h5>
      <h5 className='desc_price'>${props.price}.00</h5>
      </div>
    </div>
  )
}

export default Card
