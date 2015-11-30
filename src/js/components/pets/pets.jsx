import React from 'react';
import PetInput from './petInput.jsx';
import Pet from './pet.jsx'
import PetList from './petList.jsx'
import PetStore from '../../stores/petStore.js'

const Pets = React.createClass({
  getInitialState () {
    return {
      pets: []
    }
  },
  onChange () {
    this.setState({})
  },
  componentDidMount () {
    PetActions.getAll()
    PetStore.addChangeListener(this.onChange)
  },
  render () {
    return (
      <div></div>
    )
  }
})
