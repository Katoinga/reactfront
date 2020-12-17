import React from 'react';
import './styles/CocinaTopBar.css';
import logoImage from '../images/logo.png'
import { Link } from 'react-router-dom';
import Comanda from './Comanda.js';
class CocinaPreparacion extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      color : props.color,

    }
  }

  render(){
    const count = 0;
    return(
      <div>
        <div  class="cocinaPedidos">
          <label class="bitext">Nuevos pedidos</label>
          <label class="smtext">Acá aparecen los pedidos en orden de llegada según es enviado por los mozos</label>
          <label class="bigtext">En preparacion</label>
          <label class="stext">Pedidos que ya se están preparando</label>
        </div>
        <div className="contComandas">
        <table>
          <tr>
            <th><Comanda classButton="preparacion"/></th>
            <th><Comanda classButton="preparacion"/></th>
            <th><Comanda classButton="preparacion"/></th>
          </tr>
          {count === 0
            ? <p>one </p>
            :  <p>two </p>
            count = count +1;
          }
        </table>


        </div>
        <div className="contComandasPrep">
        <Comanda classButton="listo"/>
        <Comanda classButton="listo"/>
        <Comanda classButton="listo"/>
        <Comanda classButton="listo"/>
        <Comanda classButton="listo"/>
        <Comanda classButton="listo"/>
        <Comanda classButton="listo"/>
        <Comanda classButton="listo"/>
        <Comanda classButton="listo"/>
        <Comanda classButton="listo"/>
        <Comanda classButton="listo"/>
        <Comanda classButton="listo"/>
        <Comanda classButton="listo"/>
        <Comanda classButton="listo"/>
        <Comanda classButton="listo"/>
        <Comanda classButton="listo"/>
        <Comanda classButton="listo"/>
        <Comanda classButton="listo"/>

        </div>
      </div>
    )
  }
}
export default CocinaPreparacion
