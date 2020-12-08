import React from 'react';
import Category from './Category';
import './styles/CategoriesDisplay.css';


class CategoriesDisplay extends React.Component {

  render() {
    return (
      <div className="containerCategories">
        <div className="title">
          <h3>Categorias</h3>
          <p>Selecciona una categoria para ver los productos</p>
        </div>
        <div className="categoriesList">
          <Category title="Todos" quantity="500" description="Lista de todos los platos del sistema" image="../images/logo.png"></Category>
          <Category title="Todos" quantity="500" description="Lista de todos los platos del sistema" image="../images/logo.png"></Category>
          <Category title="Todos" quantity="500" description="Lista de todos los platos del sistema" image="../images/logo.png"></Category>
          <Category title="Todos" quantity="500" description="Lista de todos los platos del sistema" image="../images/logo.png"></Category>
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
