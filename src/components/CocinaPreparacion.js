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
      data:[{
        "classButton" : "preparacion"
      },{
        "classButton" : "preparacion"
      },{
        "classButton" : "preparacion"
      },{
        "classButton" : "preparacion"
      },{
        "classButton" : "preparacion"
      },{
        "classButton" : "preparacion"
      },{
        "classButton" : "preparacion"
      },{
        "classButton" : "preparacion"
      },{
        "classButton" : "preparacion"
      },{
        "classButton" : "preparacion"
      },{
        "classButton" : "preparacion"
      },{
        "classButton" : "preparacion"
      },{
        "classButton" : "preparacion"
      },{
        "classButton" : "preparacion"
      },{
        "classButton" : "preparacion"
      },{
        "classButton" : "preparacion"
      },{
        "classButton" : "preparacion"
      },{
        "classButton" : "preparacion"
      },{
        "classButton" : "preparacion"
      }
    ],
    data2:[{
      "classButton" : "listo"
    },{
      "classButton" : "listo"
    },{
      "classButton" : "listo"
    },{
      "classButton" : "listo"
    },{
      "classButton" : "listo"
    },{
      "classButton" : "listo"
    },{
      "classButton" : "listo"
    },{
      "classButton" : "listo"
    },{
      "classButton" : "listo"
    },{
      "classButton" : "listo"
    },{
      "classButton" : "listo"
    },{
      "classButton" : "listo"
    },{
      "classButton" : "listo"
    },{
      "classButton" : "listo"
    },{
      "classButton" : "listo"
    },{
      "classButton" : "listo"
    },{
      "classButton" : "listo"
    },{
      "classButton" : "listo"
    },{
      "classButton" : "listo"
    }
  ]
    }
  }

  render(){
    var count = 0;

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
          {this.state.data.map((item) =>{
            return(
              <div>
                <th><Comanda classButton={item.classButton}/></th>
                <th><Comanda classButton={item.classButton}/></th>
                <th><Comanda classButton={item.classButton}/></th>
              </div>
            )

          })}
          </tr>
        </table>


        </div>
        <div className="contComandasPrep">
        {this.state.data2.map((item) =>{
          return(
            <div>
              <th><Comanda classButton={item.classButton}/></th>
            </div>
          )

        })}

        </div>
      </div>
    )
  }
}
export default CocinaPreparacion
