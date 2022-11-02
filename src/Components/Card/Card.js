import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className='Card'>
      <img className='img' src={props.img} alt="" />
      <div className='desc'>
      <h5 className='desc_title'>{props.title}</h5>
      <h5 className='desc_price'>${props.price}.00</h5>
      </div>
    </div>
  )
}

export default Card
