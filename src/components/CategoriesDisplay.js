import React from 'react';
import Category from './Category';
import './styles/CategoriesDisplay.css';


class CategoriesDisplay extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      todoList:[],
      data:[{
        title       : "Todos",
        quantity    : "500",
        description : "Lista de todos los platos del sistema",
        image :       "../images/logo.png"
      },{
        title       : "Todos",
        quantity    : "500",
        description : "Lista de todos los platos del sistema",
        image :       "../images/logo.png"
      },{
        title       : "Todos",
        quantity    : "500",
        description : "Lista de todos los platos del sistema",
        image :       "../images/logo.png"
      },{
        title       : "Todos",
        quantity    : "500",
        description : "Lista de todos los platos del sistema",
        image :       "../images/logo.png"
      }
      ]
    }
  }
  componentDidMount(){
    this.fetchTasks()
  }
  
  fetchTasks(){
    console.log('Fetching...')

    fetch('http://127.0.0.1:8000/gestionProducto/api/categoria/')
    .then(response => response.json())
    .then(data => 
      this.setState({
        todoList:data
      })
    )
  }
  render() {
    return (
      <div className="containerCategories">
        <div className="title">
          <h3>Categorias</h3>
          <p>Selecciona una categoria para ver los productos</p>
        </div>
        <div className="categoriesList">
        {this.state.todoList.map((item) =>{
          return(
            <Category
              title={item.ProCatNom}
              quantity={item.ProCatCod}
              description={item.ProCatDesd}
              image={item.ProCatImaNom}
            />
          )
        })}
        </div>
        <div className="buttonNew">
          <img className="iconNewCategory"></img>
          <button className="newCategory">Nueva Categoria</button>
        </div>
        <div className="buttonEdit">
          <img className="iconEditCategory"></img>
          <button className="editCategory">Editar Categoria</button>
        </div>
      </div>
    )
  }
}

export default CategoriesDisplay
