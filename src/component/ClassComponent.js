import React, { Component } from 'react'


export default class ClassComponent extends Component {

  render() {

    return (
      <>


        <div id='open2' className='box_2'>

          <h1 style={{ fontSize: '38px' }}>This is created using Class Component</h1>
          <p>This is done using external css</p>
          <p style={{ color: 'blue' }}>This is done using inline css</p>

        </div>
      </>
    )

  }

}
