import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import './index.css'
import App from "./component/App"
import Detail from './component/Detail'
import Student from './component/Student'
import AddStudent from './component/addStudent'


const One = () => {
  return (
    <Detail>
    <>
    
<BrowserRouter>
<App/>
  <Routes>


      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/student" element={<Student/>}/>
      <Route path="/addStudent" element={<AddStudent/>}/>


  </Routes>


</BrowserRouter>
  
  
  
    
    
    
    
    
    </>
    </Detail>
  )
}

export default One