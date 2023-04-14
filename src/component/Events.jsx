import React,{useState} from 'react'
import "../web/Style.css"

const Events=() => {
    const pulse =  "#8e44ad"
    const[col,setCol]=useState(pulse);
    const[name,setName] = useState("click the button")
    const beast = () => {
        let triple =  "#34495e"
        setCol(triple)
        setName("Error 👿😡🤬😈 ")
    }

    const sleep = ()=>{
         setCol(pulse)
         setName(" Successfully compiled! 🤑🤑 🙏");
         
         
         
         
         
         
         
         
    }


  return (
    <div  className='sss' style={{backgroundColor:col}}>
    
      <button className='hhh'  onClick={beast}  onDoubleClick={sleep}> {name}</button>
    </div>
  )
}

export default Events
