import React from 'react';
import './styles/RecordOrders.css'

class RecordOrders extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      data:[{
        "cmd" : "2",
        "mozo" : "Paco",
        "producto": "7"
      },{
        "cmd" : "2",
        "mozo" : "Paco",
        "producto": "7"
      }
      ]
    }
  }

  render() {
    return (
      <div className="RecordOrders">
        <p className="title">Historial</p>
        <p className="description">Pedidos atendidos</p>
        <table className="table">
          <tr>
            <th>Cmd</th>
            <th>Mozo</th>
            <th>Prod.</th>
          </tr>
          {this.state.data.map((item) =>{
            return(
              <tr>
                <th>{item.cmd}</th>
                <th>{item.mozo}</th>
                <th>{item.producto}</th>
              </tr>
            )
          })}
        </table>
      </div>
    )
  }
}

export default RecordOrders
