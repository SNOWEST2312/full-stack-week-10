// GOAL: display a list of pet types; the user can choose one, and see
// detailed information about that pet type.
import PetInfo from './PetInfo.js';
import PetTypes from './PetTypes.js';
// CHALLENGE: create the two above components and have each render a h2 tag with some text
import { useState } from 'react';
const PetApp = (props) => {
  // lifted from PetTypes
  const [chosenPet, setChosenPet] = useState('dog');

  // We lifted this status  out of PetTypes.js because both PetTypes component and PetInfo need it

  const [petTypes, setPetTypes] = useState([
    {
      name: 'dog',
      description: 'Common pet with a range of different types',
    },
    {
      name: 'cat',
      description: 'calm housepets that catch mice',
    },
    {
      name: 'parakeet',
      description: 'requires a special cage and can learn to talk',
    },
  ]);

  return (
    <>
      <h1>Pet Info App</h1>
      <PetTypes chosenPet={chosenPet} setChosenPet={setChosenPet} />
      <PetInfo chosenPet={chosenPet} />
    </>
  );
};
export default PetApp;
