import React from 'react';
import './styles/CocinaTopBar.css';
import logoImage from '../images/logo.png'
import { Link } from 'react-router-dom';
import Comanda from './Comanda.js';
class CajeroGenerarComprobantes extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      color : props.color,
      
    }
  }

  render(){
    return(
      <div  class="cocinaPedidos">
<label class="bitext">Generar Comprobantes</label>
<label class="smtext">Acá aparecen los comprobantes en orden de llegada según es enviado por los mozos</label>
</div>
    )
  }
}
export default CajeroGenerarComprobantes
