import React from 'react';
import './styles/DashTopBar.css';
import logoImage from '../images/logo.png'

class DashTopBar extends React.Component {
  render(){
    return(
      <div className="navtop">
        <div className="header"> 
        </div>
        <div className="selectbutton-purple"> 
        </div>
        <svg data-layer="ddcd63c5-a87b-4e65-8f9e-eccb39b07fff" preserveAspectRatio="none" viewBox="4.5 4.5 27 27" class="icon"><path d="M 4.5 19.5 L 16.5 19.5 L 16.5 4.5 L 4.5 4.5 L 4.5 19.5 Z M 4.5 31.5 L 16.5 31.5 L 16.5 22.5 L 4.5 22.5 L 4.5 31.5 Z M 19.5 31.5 L 31.5 31.5 L 31.5 16.5 L 19.5 16.5 L 19.5 31.5 Z M 19.5 4.5 L 19.5 13.5 L 31.5 13.5 L 31.5 4.5 L 19.5 4.5 Z"  /></svg>
        <p>Dashboard</p>
        <div className="userdata"> 
        <img className="foto" src={logoImage}></img>
        <div className="grouprole"> 
        <label className="nombre">Aqui nombre largooooo</label>
        <label className="rol">Aqui rol</label>
        </div>
        </div>
        <label className="datet">Aqui hora 1:1</label>

      </div>
    )
  }
}
export default DashTopBar
