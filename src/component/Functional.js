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
  const [next, setNext] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()



    const newRecord = { ...name }
    setRecords([...record, newRecord]);

    setName({ username: "", department: "", rating: "" })

    setNext(true)
  }

  const handleChange = (user) => {
    setName({ ...name, [user.target.name]: [user.target.value] })
    console.log(name)
  }
  const back = () => {
    setNext(false)
  }

  return (

    <>

      {next ? null :
        <div >

          <h1>EMPLOYEE FEEDBACK FORM</h1>


          <form className='form_1' onSubmit={handleSubmit}>

            <label for='username'>Name :</label><br />
            <input type='text' id='username' name='username' value={username} onChange={handleChange} required autoComplete='off'  /> <br /><br />


            <label for='department'>Department  :</label><br />
            <input type='text' id='department' name='department' value={department} onChange={handleChange} required autoComplete='off' /><br /><br />


            <label for='rating'>Rating  :</label><br />
            <input type="number" id='rating' name='rating' value={rating} onChange={handleChange} required autoComplete='off' /> <br /><br />


            <button type='submit'>Submit</button>

          </form>

        </div>}

      {next ?
        <div >
          <h1>EMPLOYEE FEEDBACK DATA</h1>
          <div id='container'>
            {record.map((current) => {
              const { username, department, rating } = current;
              return (

                <div className='item'>
                  Name : {username} <span>|</span> Department : {department}  <span>|</span>  Rating : {rating}
                </div>

              )
            }


            )}


          </div>

          <div>
            {next ? <input id='submit' style={{ marginTop: '15px', width: "180px" }} onClick={back} type="button" value="Go Back" /> : null}
          </div>

        </div> : null}

    </>

  )

}

export default Functional


