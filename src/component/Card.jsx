import React from "react";
import "../web/Style.css";
import Sdata from "../component/Sdata";

function Card() {
  console.log(
    "data",
    Sdata.map((item) => item)
  );
  return (
 
   <div className="main">
      <div className="header">
        <h1 className="abc"> top 3 Netflix series </h1>
      </div>

      <div className="card">
        {Sdata.map((item,index) => (
          <div className="card1" key={index.id}>
            <h1> {item.sname}</h1>
            <img src={item.imgscr} alt="" width={300} height={300} />
            <div className="container1">
              <button>
                
                <a href={item.links} target="_blank"> Watch Now</a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
   
  );
}

export default Card;
