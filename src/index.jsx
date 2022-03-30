/* eslint-disable no-undef */
import '../assets/stylesheets/application.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

// const Hello = (props) => {
//   const { name, age } = props;
//   const message = `Hello, I'm ${name} and I'm ${age}.`;
//   return <h1>{message}</h1>;
// };

// eslint-disable-next-line react/prefer-stateless-function
// class way
// class Hello extends React.Component {
//   // hidden constructor
//   // constructor(props) {
//   //   super(props);
//   // }
//   render() {
//     const { name, age } = this.props;
//     const message = `Hello, I'm ${name} and I'm ${age}.`;
//     return <h1>{message}</h1>;
//   }
// }

const root = document.getElementById('root');

ReactDOM.render(<App />, root);