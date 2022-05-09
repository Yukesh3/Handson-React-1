import React, { Component } from 'react'


export default class ClassComponent extends Component {
  render() {

    const modal_2 = () => {
      const one = document.getElementById('open2');
      one.style.display = "block";
    }


    return (
      <>
        <button className='btn2' onClick={() => modal_2()}>Class Component</button>


        <div id='open2' className='box_2'>

          <h1 style={{ fontSize: '38px' }}>This is created using Class Component</h1>
          <p>This is done using external css</p>
          <p style={{ color: 'blue' }}>This is done using inline css</p>

        </div>
      </>
    )

  }

}
