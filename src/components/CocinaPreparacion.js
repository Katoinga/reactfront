import React from 'react';
import './styles/CocinaTopBar.css';
import logoImage from '../images/logo.png'
import { Link } from 'react-router-dom';

class CocinaPreparacion extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      color : props.color,
      
    }
  }

  render(){
    return(
      <div  class="cocinaPedidos">
      
<label class="bitext">Nuevos pedidos</label>
<label class="smtext">Acá aparecen los pedidos en orden de llegada según es enviado por los mozos</label>

<label class="bigtext">En preparacion</label>
<label class="stext">Pedidos que ya se están preparando</label>

</div>
    )
  }
}
export default CocinaPreparacion
