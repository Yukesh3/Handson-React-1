import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { store } from './Detail'

const Student = () => {
    const [student]=useContext(store)
  return (
<>

<Link to='/addStudent'>Add Student</Link>
<table className="table" style={{marginTop:"15vh"}}>
  <thead className="thead-dark">
    <tr >
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Course</th>
      <th scope="col">Batch</th>
      <th scope="col">Change</th>


    </tr>
  </thead>
  <tbody>
      {student.map((item)=>(


<tr>
      <th scope="row">{item.Name}</th>
      <td>{item.Age}</td>
      <td>{item.Course}</td>
      <td>{item.Batch}</td>
      <td><Link to='/addStudent'>Edit</Link></td>

</tr>

      ))}
      </tbody>


</table>
















</>  )
}

export default Student