import React, { useState,useContext } from 'react'
import { Link } from 'react-router-dom'
import { store } from './Detail'



const AddStudent = () => {
    const [Name, setName]=useState("")
    const [Age, setAge]=useState("")

    const [Course, setCourse]=useState("")

    const [Batch, setBatch]=useState("")
    const [student, setStudent]=useContext(store)

    const Handler_1=(e)=>{
        setName(e.target.value)
    }
    const Handler_2=(e)=>{
        setAge  (e.target.value)
    }
    const Handler_3=(e)=>{
        setCourse(e.target.value)
    }
    const Handler_4=(e)=>{
        setBatch(e.target.value)
    }
    const Submit_Handler=()=>{
        setStudent([...student,{Name:Name,Age:Age,Course:Course,Batch:Batch}])
    }

  return (
<>



<div>

<label for>Name:</label>
<input type="text" id="name" value={Name} onChange={Handler_1}/>
<label for>Age:</label>
<input type="number" id="age" value={Age} onChange={Handler_2}/>
<label for>Course:</label>
<input type="text" id="course" value={Course} onChange={Handler_3}/>
<label for>Batch:</label>
<input type="text" id="batch" value={Batch} onChange={Handler_4}/>

</div>

<Link to='/student'>Cancel</Link>
<Link to='/student' onClick={Submit_Handler}>Sumbit</Link>










    </>  )
}

export default AddStudent