import { useState } from 'react';
const PetTypes = props =>{
    const [ petTypes, setPetTypes ] = useState([
        {
            name: 'dog',
            description: 'Common pet with a range of different types'
        },
        {
            name: 'cat',
            description: 'calm housepets that catch mice'
        },
        {
            name: 'parakeet',
            description: 'requires a special cage and can learn to talk'
        }
    ]);

    // Need a state to keep track of which pet was chosen by the user.
    

    // CHALLENGE: when the user clicks a list item, the chosenPet state should be updated to the pet they clicked on. AND the chosen pet should be displayed in the h2
    return <>
        <h2>Pet Types: {props.chosenPet}</h2>
        <ul>
            {/* Convert the array of pets in the state to an array of <li> elements. The array map method converts one array to a different array */}
            {petTypes.map(pet=><li 
                                    key={pet.name} 
                                    onClick={event=>props.setChosenPet(pet.name)}
                                >
                                {pet.name}</li>)}
        </ul>
    </>
}
export default PetTypes;