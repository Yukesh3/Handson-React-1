import React from 'react'
import ReactDOM from 'react-dom'
import Functional from './component/Functional'
import ClassComponent from './component/ClassComponent'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <>

        <h1>Styling using Functional and Class component</h1>
        <Functional />
        <ClassComponent />

    </>
)


