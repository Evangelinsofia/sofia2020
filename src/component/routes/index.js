import React from 'react'
import {Routes,Route } from "react-router-dom";
import Register from '../Register';
import Login from '../Login';
import Home from '../Home';
import Course from '../Course';
import Student from '../Student';



const Rout = () => {
    
  return (
    <>
    
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/course" element={<Course />} />
    <Route path="/student" element={<Student />} />
       
    </Routes>
    
    
    </>
  )
}

export default Rout