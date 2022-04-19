import React, { Component } from 'react'
import { slide as Menu } from 'react-burger-menu'
import './NevigationBar.css'

export default class NevigationBar extends Component {

  showHome(event){
    event.preventDefault();
  }

  showFocus(event){
    event.preventDefault();
  }

  showIdea(event){
    event.preventDefault();
  }

  showAbout(event){
    event.preventDefault();
  }

  showSettings (event) {
    event.preventDefault();
    alert("Setting clicked");
  }

  render() {
    return (
      <Menu>
        <a id="home" className="menu-item" href="/">HOME</a>
        <a id="focus" className="menu-item" href="/about">FOCUS</a>
        <a id="idea" className="menu-item" href="/about">IDEA</a>
        <a id="about" className="menu-item" href="/contact">ABOUT</a>
        <a onClick={ this.showSettings } className="menu-item" href="">SETTINGS</a>
      </Menu>
    )
  }
}
