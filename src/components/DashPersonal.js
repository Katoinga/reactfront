import React from 'react';
import './styles/DashPersonal.css';
import ItemListPersonal from './ItemListPersonal';


class DashPersonal extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      data:[{
        "codigo" : "2",
        "nombres" : "Paco",
        "apellidos" : "Gerte",
        "dni" : "78648524",
        "celular" : "7896587458",
        "direccion" : "Av. Paquitos",
        "sueldo" : "1260.30",
        "rol" : "Admin",
        "estado" : "Inactivo"
            }
      ]
    }
  }

  render(){
    return(
      <div className="dashPersonal">

       <div className="buttonNuevoProducto">

        <div className="rectangle">
          <h3>Nuevo Usuario</h3>
          <svg data-layer="e3946174-5714-41e8-8c73-d2a0a5d90d48" preserveAspectRatio="none" viewBox="7.5 7.5 16 16" class="icon"><path d="M 23.50000190734863 16.64285850524902 L 16.64285850524902 16.64285850524902 L 16.64285850524902 23.50000190734863 L 14.35714340209961 23.50000190734863 L 14.35714340209961 16.64285850524902 L 7.5 16.64285850524902 L 7.5 14.35714340209961 L 14.35714340209961 14.35714340209961 L 14.35714340209961 7.5 L 16.64285850524902 7.5 L 16.64285850524902 14.35714340209961 L 23.50000190734863 14.35714340209961 L 23.50000190734863 16.64285850524902 Z"  /></svg>
          </div>

       </div>

       <div className="bar">
        <input class="searchba" type="text" placeholder= "  Ingrese texto"></input>
       </div>

       <div className="tablePersonal">
          <table>
          <tr>
            <th>Codigo</th>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>DNI</th>
            <th>Celular</th>
            <th>Direccion</th>
            <th>Sueldo</th>
            <th>Rol</th>
            <th>Estado</th>
          </tr>
          {this.state.data.map((item) =>{
            return(
              <ItemListPersonal
                codigo={item.codigo}
                nombres={item.nombres}
                apellidos={item.apellidos}
                dni={item.dni}
                celular={item.celular}
                direccion={item.direccion}
                sueldo={item.sueldo}
                rol={item.rol}
                estado={item.estado}
              />
            )
          })}
          </table>
       </div>

      </div>
    )
  }
}
export default DashPersonal
