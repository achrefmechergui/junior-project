import React, { useState } from "react";
import "../App.css";
import {Link} from 'react-router-dom'
import axios from "axios";

function Navbar(props) {
  
  const [Name,setName] = useState('')


  const hundelinput = (e)=>{
    setName(e.target.value)

  }

  const hundelsearch = (Name)=>{
   axios.get(`http://localhost:5000/search/${Name}`).then((res)=>{
   props.getofsearch(res.data)
   setName("")
   props.hundelsearchpage()

   }).catch((err)=>{
    console.log(err)
   })
  }



  const hundelcategory = (category)=>{
    props.categorytype(category)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <a href="/" className="navbar-brand">
          Italian Recipes
          <span className="logo">🍴</span>
        </a>
      <Link onClick={()=>{props.hundelhomepage()}} className="link" to={'/'}>Home</Link>
      <Link className="link" to={'/add'}>Add</Link>
      <Link className="link" to={'/contact'}>Contact</Link>
      <Link className="link" to={'/about'}>About</Link>






    
<div className="btn-group">
  <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
  Category
  </button>
  <ul className="dropdown-menu">
    <Link to={'/category'} onClick={()=>{hundelcategory("other recipes")}} className="dropdown-item" >   other recipes</Link>
    <Link onClick={()=>{hundelcategory("pasta")}} className="dropdown-item" to={'/category'} > pasta</Link>
    <Link className="dropdown-item" onClick={()=>{hundelcategory("meat")}} to={'/category'} >  meat</Link>
  </ul>
</div>
























      
      

        <div className="form-inline">
          <input
            type="search"
            placeholder="Search For Recipe ..."
            className="form-control"
            onChange={(e)=>{hundelinput(e)}}
            value={Name}
          />
          <button className="btn btn-primary" onClick={()=>{hundelsearch(Name)}}  >
            Search
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
