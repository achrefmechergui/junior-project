import "./App.css";

import Navbar from "./components/navbar";
import Main from "./components/main";
import Footer from "./components/footer";
import Contact from "./components/contact";
import About from "./components/about";
import Add from "./components/add";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [copyofdata, setcopyofdata] = useState([]);
  const [newdata,setNewdata] = useState([])
 
 
 
  const handeldata = (copy)=>{
    setcopyofdata(copy)
  }

 const hundelnewdata = (newdata)=>{
     setNewdata(newdata)
 }

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main dataupdated={newdata}  handeldata={handeldata} />} />
        <Route path="/add" element={<Add newdata={hundelnewdata} copyofdata={copyofdata} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
