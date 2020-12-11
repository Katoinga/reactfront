import React  from 'react';
import './styles/NewCategory.css';

class NewCategory extends React.Component {
  render() {
    return (
      <div className="containerNewCategory">
        <p className="title">Categorias</p>
        <p className="description">Completa el formulario con los datos solicitados</p>
        <svg data-layer="74dcd9f3-4d01-47d8-a752-1e17bef85793" preserveAspectRatio="none" viewBox="-1.125 -1.125 482.25 2.25" class="divider"><path d="M 0 0 L 480 0"></path></svg>
        <p className="imagetitle">Selecciona una foto para esta categoria</p>
        <div className="containerImage">
          <img className="image">

          </img>
          <div className="selectImage">
            <p className="imageDes">Suelta el archivo aqui</p>
            <button className="seleccionar">Seleccionar</button>
          </div>
        </div>
        <div className="form">
          <label>Nombre de la categoria (20 caracteres max)</label><br></br>
          <input type="text"></input><br></br>
          <label>Descripción de la categoría (50 caracteres max)</label><br></br>
          <input type="text"></input><br></br>
        </div>
        <button className="cancelar">Cancelar</button>
        <button className="guardar">Guardar</button>
      </div>
    )
  }
}

export default NewCategory
