import React from 'react';
import './styles/DashRectangle.css';

class DashRectangle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDateTime: Date().toLocaleString(),
      ingresos : props.ingresos,
      efectivo : props.efectivo,
      prodMenu : props.prodMenu,
      mesasOcupadas : props.mesasOcupadas,
      usuario : props.usuario
    }
  }

  render(){
    return(
      <div className="rectangles">
        <div className= "usertext">
        <h3>Hola, {this.state.usuario}</h3>
        <h1>{this.state.currentDateTime}</h1>
        </div>
        <div className= "rectanglered">
        <h3>Ingresos de hoy</h3>
        <h1>{this.state.ingresos}150</h1>
        </div>
        <div className= "rectanglegreen">
        <h3>Efectivo en caja</h3>
        <h1>{this.state.efectivo}160</h1>
        </div>
        <div className= "rectangleorange">
        <h3>Productos en menú</h3>
        <h1>{this.state.prodMenu}15</h1>
        </div>
        <div className= "rectanglecyan">
        <h3>Mesas ocupadas</h3>
        <h1>{this.state.mesasOcupadas}5</h1>
        </div>


      </div>


    )
  }
}
export default DashRectangle
