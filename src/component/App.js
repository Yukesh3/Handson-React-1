import React from "react"
import { Link } from 'react-router-dom'


export default function App() {

  return (
    <>
    <div className="nav">
    <ul className="ul">

        <Link to='/home'><button>Home 🏠</button></Link>

        <Link to='/student'><button>Student 🙋‍♂️</button></Link>

        <Link to='/about'><button>About 📔</button></Link>

      </ul>

    </div>
     


    </>
  )
}


