import {useParams} from 'react-router-dom';
import { useState } from 'react';
import axios from "axios";
function CardDetails() {
  const [data,SetData]=useState([]);
  let id=useParams()
  axios.get(`http://localhost:8080/products/${id}`).then(res=>SetData(res.data));
  console.log(data);
  return (
    <div className="product">
      <span>
        <h4 className="detailsTitle"></h4>
      </span>
      <img className="detailsImage" src="" alt="" />
      {/* Notice the "Price: $". do not edit it. */}
      <span className="detailsPrice">Price: $</span>
      <span className="detailsPrice"></span>
      <div>
        <h5>Reviews:</h5>
        {/* Iterate over reviews and populate review like: 
        
        <div className="review">
          <span className="reviewBy">UserName1234</span>
          <span className="reviewDesc">This product is really good etc....</span>
        </div>
        
        */}
      </div>
    </div>
  );
}
export { CardDetails };
