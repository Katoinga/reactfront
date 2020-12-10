import React from 'react';
import './styles/Login.css';
import logoImage from '../images/logo.png'
import { Link } from 'react-router-dom';

class Login extends React.Component {
  render(){
    return(
      <div className="contLogin">
        <h3>SISTEMA DE ADMINISTRACIÓN</h3>
        <h1>INICIA SESIÓN</h1>
        <img src={logoImage} className="logoImage"></img>
        <form className="loginForm">
          <label>* DNI (8 caracteres)</label><br></br>
          <input type="text"></input><br></br>
          <label>* Contraseña</label><br></br>
          <input type="password"></input><br></br>
          <Link to="/admin/dashboard">
          <button className="loginButton">INGRESAR</button>
          </Link>
        </form>
      </div>
    )
  }
}
export default Login
