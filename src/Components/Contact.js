import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import BaseLayout from './BaseLayout.js';


export default class Contact extends Component {

  constructor(props){
    super(props)
  }

  render() {
    return (

      <div className="App one">
          <h1>ContactUs</h1>
          <p>Email: hello@gmail.com</p>
          <p>Phone: 123-456-7890</p>
      </div>
    );
  }
}
