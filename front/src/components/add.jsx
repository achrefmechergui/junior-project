import React, { useState } from 'react';
import "../App.css" ;
import axios from 'axios';

const Add = (props) => {
     
    const [newdata,setNewdata] = useState()
    const [img,setNewimage] = useState('')
    const [name,setNewname] = useState('')
    const [description,setNewdescription] = useState('')


    const hundelnewimage = (e)=>{
        setNewimage(e.target.value)
    }

    const hundelnewname = (e)=>{
     setNewname(e.target.value)
    }

    const hundelnewdescription = (e)=>{
     setNewdescription(e.target.value)
    }

    const addnewrecipe = ()=>{
        axios.post('http://localhost:5000/add',{img,name,description}).then((res)=>{
            setNewdata ([...props.copyofdata,res.data])
            props.newdata(newdata)

        })
    }



    return (
        <form className=' w-50 mx-auto addform '>
        <div class="row mb-3">
          <label for="inputEmail3"  class="col-sm-2 col-form-label fw-semibold">Image :</label>
          <div class="col-sm-10">
            <input onChange={(e)=>{hundelnewimage(e)}} placeholder='Put the url of the image...' type="text" class="form-control" id="inputEmail3"/>
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputPassword3" class="col-sm-2 col-form-label fw-semibold">Name :</label>
          <div class="col-sm-10">
            <input onChange={(e)=>{hundelnewname(e)}} placeholder='Put the Name of Recipe...' type="text" class="form-control" id="inputPassword3"/>
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputPassword3" class="col-sm-2 col-form-label fw-semibold">Description:</label>
          <div class="col-sm-10">
            <input onChange={(e)=>{hundelnewdescription(e)}} type="text" placeholder='Put the Description of the recipe...' class="form-control" id="inputPassword3"/>
          </div>
        </div>
       
        <button onClick={()=>{addnewrecipe()}} type="submit" class="btn btn-primary mt-4">Add New Recipe</button>
      </form>
    );
}

export default Add;
