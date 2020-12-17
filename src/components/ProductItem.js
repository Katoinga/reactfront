import React from 'react';
import './styles/ProductItem.css'

class ProductItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      image : props.image,
      codigo : props.codigo,
      nombre : props.nombre,
      description : props.description,
      disponibilidad : props.disponibilidad,
      precio : props.precio
    }
  }

  render() {
    return (
        <div className="itemProductAll">
          <img className="imageProduct"src={this.state.image}/>
          <h6 className="codigoProduct">{this.state.codigo} - {this.state.nombre}</h6>
          <h6 className="descriptionProduct">{this.state.description}</h6>
          { this.state.disponibilidad == "disponible"
            ?<h6 className="disponible">Disponible</h6>
            :<h6 className="nodisponible">No Disponible</h6>
          }
          <h6 className="precioProduct">S/.{this.state.precio}</h6>
        </div>
    )
  }
}

export default ProductItem
