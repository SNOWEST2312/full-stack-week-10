// GOAL: display a list of pet types; the user can choose one, and see
// detailed information about that pet type.

// A React component is usually written as a function that returns
// some stuff to render in the browser and takes a 'props'
// parameter that stores data passed from the parent component.
import Subtitle from './Subtitle.js';

// State in React is a way of keeping traCK of the current state 
// of a component and updating according to user interaction, and 
// automatically rerendering hte coponent when the state changes.
import { useState } from 'react';
// the useState 'hook'

const App = props => {
    // showSubtitle is a state variable that keeps track of whether
    //we show or hide the subtitle.
    // setShowSubtitle is a function used to change its value.
    // the value passed into useState is the INITIAL value of state.
    const [ showSubtitle, setShowSubtitle ] = useState(true);

    let ToggleableSubtitle = <></>;
    if (showSubtitle == true) {
        ToggleableSubtitle = <Subtitle text="Pets Edition!!" />;
    }

    // the syntax below in the return statement is actually JSX code
    // It's a lot like HTML, but used for React components
    return <>
     <h1>Hello React Components!</h1>
     {/* event handlers written in camelCase. The event handler prop must take a function. */}
     <button onClick={event=>{setShowSubtitle(!showSubtitle)}}>Toggle Subtitle</button>
     {/* the text attribute below is actually a prop */}
     {ToggleableSubtitle}
     <p>This component has multiple HTML elements.</p>
    </>;
}
export default App;
// Return at 1:38pm