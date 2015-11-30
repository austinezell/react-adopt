'use strict';
import $ from 'jquery';
import PetDispatcher from '../dispatchers/petDispatcher.js';
import Actions from './actionTypes';


const PetActions = {
  addPet (pet) {
    $.post('/pets/create', pet)
    .success( data => {
      // PetDispatcher({
      //   actionType: Actions.PETS.ADD_PET,
      //   pet: data
      // });
    })
    .error( err => {
    })
  },
  adoptPet () {

  },
  getAll () {
    $.get('/pets/getAll')
    .success(data => {
      console.log(data);
    })
  }
}

export default PetActions;
