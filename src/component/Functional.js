import React from 'react'


const Functional = () => {

  const modal_1 = () => {
    const one = document.getElementById('open1');
    one.style.display = "block";
  }


  return (
    <>

      <button onClick={() => modal_1()} className='btn1'>Functional Component</button>

      <div id='open1' className='box_1'>

        <h1 style={{ fontSize: '38px' }}>This is created using Functional Component</h1>
        <p>This is done using external css</p>
        <p style={{ color: 'blue' }}>This is done using inline css</p>

      </div>

    </>

  )

}

export default Functional