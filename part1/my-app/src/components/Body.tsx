import { useState } from "react";
import { Card } from "./Card";
import axios from 'axios';



function Body() {
  const [data,SetData]=useState([]);
  
  axios.get("http://localhost:8080/products").then(res=>SetData(res.data))
  return (
    <div className="container">
      {/* Iterate over data and show `Card` here */}
      {data.map(element =>{
        return <Card  d={element}/>
      })}
    </div>
  );
}

export { Body };
