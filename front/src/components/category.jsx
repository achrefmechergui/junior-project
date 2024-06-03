import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Category = (props) => {
    const [data,setData] = useState([])

   useEffect(()=>{
    axios.get(`http://localhost:5000/category/${props.category}`).then((res)=>{
       setData(res.data)
    })
   },[props.category])

    return (
        <div>
        <div>
      <div style={{ marginTop: "500px" }} className="container mt-5">
        <div className="row mt-5">
          {data.map((element, index) => (
            <div className="col-md-3 mt-5" key={index}>
              <div style={{ height: "600px" }} className="card mb-4">
                <img
                  style={{ height: "300px" }}
                  src={element.Image}
                  className="card-img-top"
                  alt={element.Name}
                />
                <div className="card-body">
                  <h5 className="card-title">{element.Name}</h5>
                  <p className="card-text">{element.Description}</p>
                </div>
                <div className="d-flex justify-content-center mb-3"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
       
        </div>
    );
}






  

export default Category;
