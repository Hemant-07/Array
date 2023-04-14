import React, { useState } from "react";


const Form =()=>{
    const [name,setName] = useState();
    const [fullName,setFullName] = useState();
    const iep=(abc)=>{
     console.log(abc.target.value);
     setName(abc.target.value);
    }
    const sub = () =>{
        setFullName(name);
    }
     
    return(

        <>

    <div>
    <h1> Hello {fullName}</h1>
<input type="text" placeholder="enter your name" onChange={iep} />
<button onClick={sub}>click this box</button>
    
    </div>
</>
 
 );
    



}
export default Form;


   
   
    



