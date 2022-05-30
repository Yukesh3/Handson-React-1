import React, { createContext,  useState } from 'react'


export const store=createContext()
const Detail = (props) => {
    const[student, setStudent]=useState([
{
    Name:"Yukesh",
    Age:23,
    Course:"Html",
    Batch:"jan",
    id:1
},
{
    Name:"Surys",
    Age:24,
    Course:"Css",
    Batch:"feb",
    id:2
},
{
    Name:"Rajini",
    Age:25,
    Course:"React",
    Batch:"marc",
    id:3
},
{
    Name:"Ajith",
    Age:28,
    Course:"Node",
    Batch:"apr",
    id:4
},

    ])
  return (
<>



<store.Provider value={[student,setStudent]}>

{props.children}
</store.Provider>













</>  )
}

export default Detail