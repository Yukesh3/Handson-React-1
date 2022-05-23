import React from "react"
import { Link } from 'react-router-dom'


export default function App() {

  return (
    <>
    <div className="nav">
    <ul className="ul">
        <Link to='/home'><li>Home</li></Link>

        <Link to='/contact'><li>Contact</li></Link>

        <Link to='/about'><li>About</li></Link>

      </ul>

    </div>
     


    </>
  )
}


