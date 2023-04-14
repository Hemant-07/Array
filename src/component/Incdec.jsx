import React, { useState } from 'react';
import "../web/Style.css";

const Incdec =() => {

    const[count,setCount] = useState(0);

    const p1 = () =>{
        setCount(count+1)
    }
    const p2 = () =>{
       
      if(count>0){
        setCount(count-1)
      }
      else{
        alert("sorry we cannot move below zero")
        setCount(0)
      }
    };
  return (
  <div className="main">
    <div className="m1">
        <h1 className='a1' style={{color:"red"}}>{count}</h1>

      

   <div className="m2">

        <button onClick={p1}  className='a2' >Increment</button>
        <button onClick={p2}  className='a3'> Decrement</button>
   </div>
        </div>

        </div>
   
 
  )
}

export default Incdec
