import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './component/Home'
import Contact from './component/Contact'
import About from './component/About'
import './index.css'
import App from "./component/App"

const One = () => {
  return (
    <>
    
<BrowserRouter>
<App/>
  <Routes>


      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>


  </Routes>


</BrowserRouter>
  
  
  
    
    
    
    
    
    </>
  )
}

export default One