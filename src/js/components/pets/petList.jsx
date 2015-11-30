import React from "react";
import PetActions from '../../actions/petActions.js';


const PetList = React.createClass({
  render () {
    let pets = this.props.pets.map( pet =>{
      return <li>pet</li>
    })
    return (
      <div className='col-md-4'>
        <ol>
          {pets}
        </ol>
      </div>
    )
  }
})
