import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "./slider.jsx";
import '../App.css'

const Main = (props) => {
  const [data, setData] = useState([]);
  const [Deletename, setDeletename] = useState("");
  const [deleteId, setDeleteId] = useState("");
  /// update :
  const [id, setid] = useState("");
  const [name, setName] = useState("");
  const [img, setImage] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (props.dataupdated.length && props.hundelget === true) {
      setData(props.dataupdated); /// update the data
    }
    if (props.searchdata.length&&props.hundelget === null) {
      setData(props.searchdata);
    } else {
      axios.get("http://localhost:5000/home").then((res) => {
        setData(res.data);
        props.handeldata(res.data); //// take a copie of data
     
      });
    }
  }, [data, props.dataupdated, props.searchdata,props.hundelget]);



  const deletefood = (id) => {
    axios.delete(`http://localhost:5000/delete/${id}`).then((res) => {
      setData(data.filter((element) => element._id !== id));
    });
  };

  //// handel the name of the food to delete in the popup of modal :
  const handleDeleteClick = (name, id) => {
    setDeletename(name);
    setDeleteId(id);
  };

  /// update section :::::::::::::::::::::::::::::::::::::::
  /// hundel image :
  const hundelimage = (e) => {
    setImage(e.target.value);
  };
  /// hundel name :
  const hundelname = (e) => {
    setName(e.target.value);
  };

  /// hundel Description:
  const hundeldescription = (e) => {
    setDescription(e.target.value);
  };

  /// hundel id :
  const hundelupdateid = (id) => {
    setid(id);
  };

  const updaterecipe = (id) => {
    axios
      .patch(`http://localhost:5000/update/${id}`, { img, name, description })
      .then((res) => {
        setData(
          data.map((element) => {
            if (element._id === id) {
              return { ...element, img, name, description };
            } else {
              return element;
            }
          })
        );
        setImage("");
        setName("");
        setDescription("");
      });
  };
  return (
 <div style={{marginTop:'150px'}}>
  <Slider/>
     <div  style={{ marginTop: "500px"  }} className="container mt-5 card-cnt">
       <div className="row mt-5">
         {data.map((element, index) => (
           <div className="col-md-3 mt-5 " key={index}>
             <div style={{ height: "600px" }} className="card mb-4">
               <img
                 style={{ height: "300px" }}
                 src={element.Image}
                 className="card-img-top"
                 alt={element.Name}
               />
               <div className="card-body  ">
                 <h5 className="card-title">{element.Name}</h5>
                 <p className="card-text">{element.Description}</p>
               </div>
               <div className="d-flex justify-content-center mb-3">
                 {/* Update button */}
                 <button
                   onClick={() => {
                     hundelupdateid(element._id);
                   }}
                   type="button"
                   className="btn btn-success me-3"
                   data-bs-toggle="modal"
                   data-bs-target="#exampleModal"
                   data-bs-whatever="@mdo"
                 >
                   Update
                 </button>
  
                 {/* Delete button  */}
                 <button
                   onClick={() => handleDeleteClick(element.Name, element._id)}
                   type="button"
                   className="btn btn-danger"
                   data-bs-toggle="modal"
                   data-bs-target="#staticBackdrop"
                 >
                   Delete
                 </button>
               </div>
             </div>
           </div>
         ))}
         {/* delete modal : */}
         <div
           className="modal fade"
           id="staticBackdrop"
           data-bs-backdrop="static"
           data-bs-keyboard="false"
           tabIndex="-1"
           aria-labelledby="staticBackdropLabel"
           aria-hidden="true"
         >
           <div className="modal-dialog">
             <div className="modal-content">
               <div className="modal-header">
                 <h1 className="modal-title fs-5 fw-bold" id="staticBackdropLabel">
                   {Deletename}
                 </h1>
                 <button
                   type="button"
                   className="btn-close"
                   data-bs-dismiss="modal"
                   aria-label="Close"
                 ></button>
               </div>
               <div style={{backgroundColor:' #d3d3d3'}} className="modal-body fw-semibold ">
                 Are you sure you want to delete {Deletename} !!!
               </div>
               <div className="modal-footer">
                 <button
                   type="button"
                   className="btn btn-secondary"
                   data-bs-dismiss="modal"
                 >
                   Close
                 </button>
                 <button
                   data-bs-dismiss="modal"
                   onClick={() => {
                     deletefood(deleteId);
                   }}
                   type="button"
                   className="btn btn-danger"
                 >
                   Delete
                 </button>
               </div>
             </div>
           </div>
         </div>
  
         {/* update modal :  */}
         <div
           className="modal fade"
           id="exampleModal"
           tabIndex="-1"
           aria-labelledby="exampleModalLabel"
           aria-hidden="true"
         >
           <div className="modal-dialog">
             <div className="modal-content">
               <div className="modal-header">
                 <h1 className="modal-title fs-5 fw-bolder" id="exampleModalLabel">
                   Update This Recipe
                 </h1>
                 <button
                   type="button"
                   className="btn-close"
                   data-bs-dismiss="modal"
                   aria-label="Close"
                 ></button>
               </div>
               <div className="modal-body">
                 <form>
                   <div className="mb-3">
                     <label
                       htmlFor="recipient-name"
                       className="col-form-label fw-medium"
                     >
                       Image:
                     </label>
                     <input
                       value={img}
                       onChange={(e) => {
                         hundelimage(e);
                       }}
                       placeholder="paste the url image here ..."
                       type="text"
                       className="form-control"
                       id="recipient-name"
                     />
                   </div>
                   <div className="mb-3">
                     <label
                       htmlFor="recipient-name"
                       className="col-form-label fw-medium"
                     >
                       Name:
                     </label>
                     <input
                       value={name}
                       onChange={(e) => {
                         hundelname(e);
                       }}
                       placeholder="Name of Recipe ..."
                       type="text"
                       className="form-control"
                       id="recipient-name"
                     />
                   </div>
                   <div className="mb-3">
                     <label htmlFor="message-text" className="col-form-label fw-medium">
                       Description:
                     </label>
                     <textarea
                       value={description}
                       onChange={(e) => {
                         hundeldescription(e);
                       }}
                       placeholder="Description of Recipe ..."
                       className="form-control"
                       id="message-text"
                     ></textarea>
                   </div>
                 </form>
               </div>
               <div className="modal-footer">
                 <button
                   type="button"
                   className="btn btn-secondary"
                   data-bs-dismiss="modal"
                 >
                   Close
                 </button>
                 <button
                   type="button"
                   onClick={() => {
                     updaterecipe(id);
                   }}
                   data-bs-dismiss="modal"
                   className="btn btn-success"
                 >
                   Update
                 </button>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
 </div>
  );
};

export default Main;
