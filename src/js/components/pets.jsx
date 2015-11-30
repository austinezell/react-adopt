'use strict';
import React from 'react';
import PetActions from '../actions/petActions.js'

const Pets = React.createClass({
  addPet (event) {
    event.preventDefault();
    let pet = {
      name: this.refs.name.value,
      age: this.refs.age.value,
      description: this.refs.description.value,
      kind: this.refs.kind.value
    };
    PetActions.addPet(pet);
  },
  render () {
    return (
      <div>
        <form onSubmit={this.addPet} id='login'>
          <div className='form-group'>
            <label htmlFor='name'>Name</label><br/>
            <input type='text' placeholder='Name' ref='name' id='name'/>
          </div>
          <div className='form-group'>
            <label htmlFor='description'>Description</label><br/>
            <input type='text' placeholder='description' ref='description' id='description'/>
          </div>
          <div className='form-group'>
            <label htmlFor='kind'>Kind</label><br/>
            <input type='text' placeholder='e.g. Dog, Cat, etc.' ref='kind' id='kind'/>
          </div>
          <div className='form-group'>
            <label htmlFor='age'>Age</label><br/>
            <input type='number' ref='age'/>
          </div>
          <div className='form-group'>
            <button type='submit' className='btn-primary'>Add Pet</button>
          </div>
        </form>

      </div>
    )
  }
});


export default Pets
