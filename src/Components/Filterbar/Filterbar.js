import React from 'react'
import './Filterbar.css'
import { useSelector, useDispatch } from 'react-redux';
import { setView } from '../../viewSlice';




const Filterbar = () => {

   const ViewIsCLiked = useSelector((state) => state.view.data );
   const dispatch = useDispatch();

   function settingView0(){

      dispatch(setView(0));
      console.log("00000000");
      console.log(ViewIsCLiked);
   
   }
   
   
   function settingView1(){
   dispatch(setView(1));
   console.log("111111111");
   console.log(ViewIsCLiked);
   
   }


  return (
    <div className='Filterbar'>
     <div className='fil' style={{width:"20.1%"}}>
        <p>Refresh</p>
        <span className="material-symbols-outlined clk" onClick={()=>{window.location.reload(false)}}>autorenew</span>
     </div>
     <div className='fil'>
        <p>View The Content By</p>
        <div>
        <span className="material-symbols-outlined clk" onClick={()=>{settingView0()}} style={{marginLeft:"2px"}} >view_compact</span>
        <span className="material-symbols-outlined clk" onClick={()=>{settingView1()}} style={{marginLeft:"10px"}} >format_list_bulleted</span>
        </div>
     </div>
    </div>
  )
}

export default Filterbar
