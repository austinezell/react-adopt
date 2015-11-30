'use strict';
import $ from 'jquery';
import PetDispatcher from '../dispatchers/petDispatcher.js';
import Actions from './actionTypes';


const PetActions = {
  addPet (pet) {
    console.log(pet);
    $.post('/pets/create', pet)
    .success( data => {
      console.log(data);
      // PetDispatcher({
      //   actionType: Actions.PETS.ADD_PET,
      //   pet: data
      // });
    })
    .error( err => {
      console.log(err);
    })
  },
  adoptPet () {

  }
}

export default PetActions;
