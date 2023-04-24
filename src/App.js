import React, { Component } from 'react'
import './App.css';
import Navbars from'../src/Navbars';
import Parts from './Parts';
import ShortSum from './ShortSum';

export default class App extends Component {

  render ()
  {
    return (
      <div className="App">
        <Navbars />
        <ShortSum />
        <Parts className="tanzimat" />
      </div>
    );
  }
}

