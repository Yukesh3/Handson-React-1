import React, { useState } from 'react'
import '../index.css'

const Functional = () => {

  const [name, setName] = useState({
    username: "",
    department: "",
    rating: "",
  });

  const { username, department, rating } = name;

  const [record, setRecords] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault()

    const container = document.getElementById('container')
    container.style.display="block";

    const newRecord = { ...name}
    setRecords([...record, newRecord]);

    setName({ username: "", department: "", rating: "" })
  }

  const handleChange = (user) => {
    setName({ ...name, [user.target.name]: [user.target.value] })
    console.log(name)
  }


  return (
    <>

      <h1>EMPLOYEE FEEDBACK FORM</h1>

      <div className='form_1'>

        <form onSubmit={handleSubmit}>

          <label for='username'>Name :</label><br />
          <input type='text' id='username' name='username' value={username} onChange={handleChange} required  autoComplete='off'/> <br /><br />


          <label for='department'>Department  :</label><br />
          <input type='text' id='department' name='department' value={department} onChange={handleChange} required autoComplete='off' /><br /><br />


          <label for='rating'>Rating  :</label><br />
          <input type="number" id='rating' name='rating' value={rating} onChange={handleChange} required autoComplete='off'/> <br /><br />


          <button type='submit'>Submit</button>

        </form>

      </div>


      <div id='container'>

        {record.map((current) => {
          const {username, department, rating } = current;
          return (

            <div className='item'>
              Name : {username} <span>|</span> Department : {department}  <span>|</span>  Rating : {rating}
            </div>

          );


        })}

      </div>




    </>

  )

}

export default Functional


