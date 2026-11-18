console.log("Hello parcel!");

import './style.css';

import App from './components/App.js';
import PetApp from './components/PetApp.js';

import { createRoot } from 'react-dom/client';
const root = createRoot(document.getElementById('react-container'));
// the top-level React component is passed into the function below
// root.render(<App />);
root.render(<PetApp />);