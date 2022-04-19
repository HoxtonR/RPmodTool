import React, { Component } from 'react'
import WelcomePage from './components/welcomePage/WelcomePage'
import NevigationBar from './components/nevigationBar/NevigationBar.jsx'
import './App.css';
export default class App extends Component {
  render() {
    return (
      <div id = "main-container">
          <NevigationBar id = "main-sidebar"/>
          <WelcomePage id = "main-contents"/>
      </div>
    )
  }
}
