import React from 'react';
import './styles/Comanda.css';

class Comanda extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      data:[{
        "cantidad" : "2",
        "producto": "Pollo dorado"
      },{
        "cantidad" : "1",
        "producto": "Pollo dorado"
      }
    ],
      classButton : "listo"
    }

  }

  render() {
    return (
      <div className="container">
        <p className="title">Comanda {this.state.nro}</p>
        <p className="mesa">Mesa {this.state.nroMesa}</p>
        <p className="mozo">Mozo {this.state.nameMozo}</p>
        <svg data-layer="b5a22fab-d889-4f27-a061-dd8740e25814" preserveAspectRatio="none" viewBox="0 -0.5 234 1" class="line5"><path d="M 0 0 L 234 0"></path></svg>
        <table className="pedidos">
          <tr className= "header">
            <th>Producto</th>
            <th>Cantidad</th>
          </tr>
          {this.state.data.map((item) =>{
            return(
              <tr className="products">
                <th>{item.producto}</th>
                <th>{item.cantidad}</th>
              </tr>
            )
          })}
        </table>
        <button className={this.state.classButton}>{this.state.classButton}</button>
      </div>
    )
  }
}

export default Comanda
