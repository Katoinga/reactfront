import React from 'react';

class ItemListPersonal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      codigo : props.codigo,
      nombres : props.nombres,
      apellidos : props.apellidos,
      dni : props.dni,
      celular : props.celular,
      direccion : props.direccion,
      sueldo : props.sueldo,
      rol : props.rol,
      estado : props.estado,
    }
  }

  render(){
    return(
      <tr className="dataTable">
        <th>{this.state.codigo}</th>
        <th>{this.state.nombres}</th>
        <th>{this.state.apellidos}</th>
        <th>{this.state.dni}</th>
        <th>{this.state.celular}</th>
        <th>{this.state.direccion}</th>
        <th>{this.state.sueldo}</th>
        <th>{this.state.rol}</th>
        <th>{this.state.estado}</th>
      </tr>
    )
  }
}

export default ItemListPersonal
