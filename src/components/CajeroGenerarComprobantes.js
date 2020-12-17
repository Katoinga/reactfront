import React from 'react';
import './styles/CajeroGenerarComprobante.css';
import logoImage from '../images/logo.png'
import { Link } from 'react-router-dom';
import Comanda from './Comanda.js';
class CajeroGenerarComprobantes extends React.Component {

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
          <label class="bitext">Generar coprobante</label>
          <label class="smtext">Puedes clicar en elguno para generar comprobante</label>

        </div>
        <div className="contComandasListas">
        <table>
          <tr>
          {this.state.data.map((item) =>{
            return(
              <div>
                <th><Comanda classButton="generar"/></th>
                <th><Comanda classButton="generar"/></th>
                <th><Comanda classButton="generar"/></th>
                <th><Comanda classButton="generar"/></th>
              </div>
            )

          })}
          </tr>
        </table>


        </div>

      </div>
    )
  }
}
export default CajeroGenerarComprobantes
