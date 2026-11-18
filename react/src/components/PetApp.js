// GOAL: display a list of pet types; the user can choose one, and see
// detailed information about that pet type.
import PetTypes from './PetTypes.js';
import PetInfo from './PetInfo.js';
// CHALLENGE: create the two above components and have each render a h2 tag with some text
import { useState } from 'react';
const PetApp = props => {
    // lifted from PetTypes
    const [ chosenPet, setChosenPet ] = useState('dog');

    return <>
        <h1>Pet Info App</h1>
        <PetTypes chosenPet={chosenPet} setChosenPet={setChosenPet}/>
        <PetInfo />
    </>
}
export default PetApp;