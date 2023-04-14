import React,{useState} from 'react'

function Hooks() {
  const[color,setColor] =useState("red")
  const[count,setCount] = useState(0)
  const[spax,setSpax] = useState(0)
  const[fruit,setFruit]=useState("Banana")
  const abc = () =>{
    setCount(count+1);
  }
  const bcd = () =>{
    setSpax(spax+5);
  }
  
  // console.log(arr.map(item=>item))
  const ccd = () =>{
    
    setFruit("mango");
  }
  
  let time = new Date().toLocaleTimeString()
  const [currenttime,setCurrenttime]=useState(time)

  const xyz =() =>{
   let ctime =new Date().toLocaleTimeString()
    setCurrenttime(ctime)
  }



  let ct = new Date().toLocaleTimeString()
  const[tm,setTm] = useState(ct)
  const zzz =() =>{
    let tz = new Date().toLocaleTimeString()
    setTm(tz)
  }



  let ist = new Date().toLocaleTimeString();
  const [zone,setZone] = useState(ist)
  const yyy = () => {
    ist = new Date().toLocaleTimeString()
    setZone(ist)
  }

  setInterval(yyy,1000)
 const ip =  "#0369a0"
  const [sd,setSd] = useState(ip);

  const aaa = () =>{
    let ym =  "#4a4e69";
    setSd(ym);
  }




  return (
    <>
    
      <h1>the box color is {color} </h1>
      <button onClick={()=>setColor("blue")} ></button>

      <hr />
      <h1> {count}</h1>
      <button className='b1' onClick ={abc}>click this button</button>
      <h1>{spax}</h1>
      <button className='b2' onClick ={bcd}>click this button </button>
      <h1>the fruit is {fruit}</h1>
      <button className='b2' onClick ={ccd}>click  </button>
      <hr />
      <h1>{currenttime}</h1>
      <button onClick={xyz}> button</button>

      <hr />
      <hr />

      <h1>{tm}</h1>
      <button onClick={zzz}> time button</button>
      <hr />
      <hr />

      <h1>{zone}</h1>
      <button onClick={yyy}> time button</button>

      <div style={{background:sd}} >
        <button onClick={aaa}>abc

        </button>
      </div>



    



    </>
  )
}

export default Hooks


