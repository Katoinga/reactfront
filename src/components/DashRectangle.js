import React from 'react';
import './styles/DashRectangle.css';

class DashRectangle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingresos : props.ingresos,
      efectivo : props.efectivo,
      prodMenu : props.prodMenu,
      mesasOcupadas : props.mesasOcupadas
    }
  }

  render(){
    return(
      <div className="rectangles">
        <div className= "usertext">
        <h3>Hola Usuario</h3>
        <h1>Actual date</h1>
        </div>
        <div className= "rectanglered">
        <h3>Ingresos de hoy</h3>
        <h1>{this.state.ingresos}</h1>
        </div>
        <div className= "rectanglegreen">
        <h3>Efectivo en caja</h3>
        <h1>{this.state.efectivo}</h1>
        </div>
        <div className= "rectangleorange">
        <h3>Productos en menú</h3>
        <h1>{this.state.prodMenu}</h1>
        </div>
        <div className= "rectanglecyan">
        <h3>Mesas ocupadas</h3>
        <h1>{this.state.mesasOcupadas}</h1>
        </div>


      </div>


    )
  }
}
export default DashRectangle
