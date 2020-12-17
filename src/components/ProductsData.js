import React from 'react';
import './styles/ProductData.css'

import ProductItem from './ProductItem.js'

class ProductsData extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      data:[{
        "codigo" : "65",
        "nombre" : "Caldo Blanco",
        "description" : "Caldo blanco con presa de cordero",
        "disponibilidad" : "disponible",
        "precio" : "15.00",
        "image" : "./images/test.jpg"
      },{
        "codigo" : "65",
        "nombre" : "Caldo Blanco",
        "description" : "Caldo blanco con presa de cordero",
        "disponibilidad" : "nodisponible",
        "precio" : "15.00",
        "image" : "./images/test.jpg"
      },{
        "codigo" : "65",
        "nombre" : "Caldo Blanco",
        "description" : "Caldo blanco con presa de cordero",
        "disponibilidad" : "disponible",
        "precio" : "15.00",
        "image" : "./images/test.jpg"
      },{
        "codigo" : "65",
        "nombre" : "Caldo Blanco",
        "description" : "Caldo blanco con presa de cordero",
        "disponibilidad" : "disponible",
        "precio" : "15.00",
        "image" : "./images/test.jpg"
      },{
        "codigo" : "65",
        "nombre" : "Caldo Blanco",
        "description" : "Caldo blanco con presa de cordero",
        "disponibilidad" : "disponible",
        "precio" : "15.00",
        "image" : "./images/test.jpg"
      },{
        "codigo" : "66",
        "nombre" : "Caldo Blanco",
        "description" : "Caldo blanco con presa de cordero",
        "disponibilidad" : "disponible",
        "precio" : "15.00",
        "image" : "./images/test.jpg"
      },{
        "codigo" : "65",
        "nombre" : "Caldo Blanco",
        "description" : "Caldo blanco con presa de cordero",
        "disponibilidad" : "disponible",
        "precio" : "15.00",
        "image" : "./images/test.jpg"
      },{
        "codigo" : "65",
        "nombre" : "Caldo Blanco",
        "description" : "Caldo blanco con presa de cordero",
        "disponibilidad" : "disponible",
        "precio" : "15.00",
        "image" : "./images/test.jpg"
      },{
        "codigo" : "65",
        "nombre" : "Caldo Blanco",
        "description" : "Caldo blanco con presa de cordero",
        "disponibilidad" : "disponible",
        "precio" : "15.00",
        "image" : "./images/test.jpg"
      }
      ]
    }
  }

  render() {
    return (
      <div className="containerProductData">
        <input className="search"></input>
        <button className="newProduct">Nuevo Producto</button>
        <div className="contProduct">
          <table>
          {this.state.data.map((item) =>{
            return(
              <div>
                <th>
                  <ProductItem
                    image={item.image}
                    codigo={item.codigo}
                    nombre={item.nombre}
                    description={item.description}
                    disponibilidad={item.disponibilidad}
                    precio={item.precio}
                    />
                </th>
                <th>
                  <ProductItem
                    image={item.image}
                    codigo={item.codigo}
                    nombre={item.nombre}
                    description={item.description}
                    disponibilidad={item.disponibilidad}
                    precio={item.precio}
                    />
                </th>
                <th>
                  <ProductItem
                    image={item.image}
                    codigo={item.codigo}
                    nombre={item.nombre}
                    description={item.description}
                    disponibilidad={item.disponibilidad}
                    precio={item.precio}
                    />
                </th>
              </div>
            )
          })}
          </table>
        </div>
        <div className="listProducts">
          <h3 className="titleProdMenu">Productos en el Menu</h3>
          <h6 className="descriptionProdMenu">Productos que están disponibles para servir</h6>
          <table>
          {this.state.data.map((item) =>{
            return(
              <div>
                <th className="rowProdMenu">
                    <div className="imageProdMenu">
                      <img src={item.image}/>
                    </div>
                    <h6 className="textProdMenu">{item.codigo} - {item.nombre}</h6>
                </th>
              </div>
            )
          })}
          </table>
        </div>
      </div>
    )
  }
}

export default ProductsData
