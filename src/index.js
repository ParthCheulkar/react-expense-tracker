// First file that's executed when we start the project.

import ReactDOM from 'react-dom';
// importing React virtual DOM.

import './index.css'; 
//importing CSS in JS (only in React)

import App from './App'; 
// importing component

ReactDOM.render(<App />, document.getElementById('root'));

//render method takes two arguments, one is of the components and other is of the destination telling where do we want to render the element

// <App/> looks llike html but that's bcoz of JSX
//just to write code in nice way.