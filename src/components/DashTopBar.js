import React from 'react';
import './styles/DashTopBar.css';
import logoImage from '../images/logo.png'

class DashTopBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      color : props.color,
      title : props.title,
      imagePerfil : props.imagePerfil,
      name : props.name,
      role : props.role,
      hour : props.hour
    }
  }

  render(){
    return(
      <div className="navtop">
        <div className="header">
        </div>
        <div className={this.state.color}>
        </div>
        <svg data-layer="ddcd63c5-a87b-4e65-8f9e-eccb39b07fff" preserveAspectRatio="none" viewBox="4.5 4.5 27 27" class="icon"><path d="M 4.5 19.5 L 16.5 19.5 L 16.5 4.5 L 4.5 4.5 L 4.5 19.5 Z M 4.5 31.5 L 16.5 31.5 L 16.5 22.5 L 4.5 22.5 L 4.5 31.5 Z M 19.5 31.5 L 31.5 31.5 L 31.5 16.5 L 19.5 16.5 L 19.5 31.5 Z M 19.5 4.5 L 19.5 13.5 L 31.5 13.5 L 31.5 4.5 L 19.5 4.5 Z"  /></svg>
        <p>{this.state.title}</p>
        <div className="userdata">
        <img className="foto" src={this.state.imagePerfil}></img>
        <div className="grouprole">
        <label className="nombre">{this.state.name}</label>
        <label className="rol">{this.state.role}</label>
        </div>
        </div>
        <label className="datet">{this.state.hour}</label>

      </div>
    )
  }
}
export default DashTopBar
