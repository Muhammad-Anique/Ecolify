import React from 'react'
import './Filterbar.css'

const Filterbar = () => {
  return (
    <div className='Filterbar'>
     <div className='fil' style={{width:"20.1%"}}>
        <p>Filter</p>
        <span className="material-symbols-outlined">autorenew</span>
     </div>

     <div className='fil'>
        <p>Sort By</p>
        <span className="material-symbols-outlined">arrow_drop_down</span>
     </div>
     <div className='fil'>
        <p>View</p>
        <div>
        <span className="material-symbols-outlined" style={{marginLeft:"2px"}} >view_compact</span>
        <span className="material-symbols-outlined" style={{marginLeft:"10px"}} >format_list_bulleted</span>
        </div>
     </div>
    </div>
  )
}

export default Filterbar
