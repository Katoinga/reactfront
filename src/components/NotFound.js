import React from 'react';
import './styles/NotFound.css'
import { Link } from 'react-router-dom';

class NotFound extends React.Component {

  render() {
    return (
      <div className="container">
        <div class="face">
	       <div class="band">
		       <div class="red"></div>
		       <div class="white"></div>
		       <div class="blue"></div>
	       </div>
	           <div class="eye1"></div>
             <div class="eye2"></div>
	           <div class="dimple1"></div>
             <div class="dimple2"></div>
	           <div class="mouth"></div>
          </div>

        <h1>Esta pagina no existe...</h1>
        <Link to='/login'>
        <div class="btn">Ir a Inicio</div>
        </Link>
      </div>
    )
  }
}

export default NotFound
