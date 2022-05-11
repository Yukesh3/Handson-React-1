import React, { useState } from "react"
import Functional from "./Functional"
import ClassComponent from "./ClassComponent"
import '../index.css'



export default function App() {


  const [b1, setBox1] = useState(false);
  const [b2, setBox2] = useState(false)


  return (
    <>
      <h1>Styling using Functional and Class component</h1>
      
      <button className='btn1' onClick={() => setBox1(true)} >Functional Component</button>

      <button className='btn2' onClick={() => setBox2(true)}>Class Component</button>

      {b1 && <Functional />}
      {b2 && <ClassComponent />}

    </>
  )
}


