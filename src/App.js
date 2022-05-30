import React from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import { incNum ,decNum } from './action/index';
function App() {
  const data=useSelector((state)=> state.ChangeTheNumber);
  const dispatch=useDispatch();
  return (
    <div className="App">
      <h1> Welcome to Redux </h1>
      <h3>Counter : {data}</h3>
      <div>
        <button className='btn btn-warning' onClick={ ()=>{dispatch(incNum(5))} } >Inc +</button>
        <button className='btn btn-danger' onClick={ ()=>{dispatch(decNum())} }>Dec -</button>
      </div>
    </div>
  );
}


export default App;
