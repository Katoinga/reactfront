import React  from 'react';
import './styles/NewCategory.css';

class NewCategory extends React.Component {
  state = {}
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = async e => {
    e.preventDefault()
    try{
      let config={
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state)
      }
      let res = await fetch('http://127.0.0.1:8000/gestionProducto/api/categoria/', config)
      let json = await res.json()
      console.log(json)
    }catch(error){

    }
    console.log(this.state)
  }
  render() {
    return (
      <div className="containerNewCategory" >
        <form
          onSubmit={this.handleSubmit}
        >
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
            <input type="text" 
              name="ProCatNom" 
              onChange={this.handleChange}
              value={this.state.ProCatNom}>
            </input><br></br>
            <label>Descripción de la categoría (50 caracteres max)</label><br></br>
            <input type="text" 
              name="ProCatDes" 
              onChange={this.handleChange}
              value={this.state.ProCatDes}>
            </input><br></br>
            <label>Imagen de la categoria (20 caracteres max)</label><br></br>
            <input type="text" 
              name="ProCatImaNom" 
              onChange={this.handleChange}
              value={this.state.ProCatImaNom}>
            </input><br></br>
          </div>
          <button className="cancelar">Cancelar</button>
          <button className="guardar">Guardar</button>
        </form>
      </div>
    )
  }
}

export default NewCategory
