import React from 'react'
import './Navbaar.css'

const Navbaar = () => {
  return (
    <div className='Navbaar'>
        <div className='NavContainer'>
            <div className='At'><span className="material-symbols-outlined">search</span></div>
            <div className='logo'><h1>Ecolify</h1></div>
            <div style={{display:"flex"}}>
            <div className='At'><span className="material-symbols-outlined">shopping_bag</span></div>
            <div className='At'><span className="material-symbols-outlined">menu</span></div>
            </div>
        </div>    
    </div>
  )
}

export default Navbaar
