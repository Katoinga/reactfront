import React from 'react';
import './styles/NewProduct.css'

class NewProduct extends React.Component {

  render() {
    return (
      <div  class="adminProductosNuevoProducto">        <div class="rectangulo45"></div>
        <p class="productos">Productos</p>
        <p class="completaElFormularioConLosDatosSolicitados">Completa el formulario con los datos solicitados</p>
        <svg preserveAspectRatio="none" viewBox="-1.125 -1.125 762.25 2.25" class="divider"><path d="M 0 0 L 760 0"  /></svg>
        <input class="inputCode" disabled></input>
        <input class="inputDes"></input>
        <p class="codigoDelProducto">Codigo del producto</p>
        <div class="xDescripcionDeLaCategoria50CaracteresMax">
          <span class="xDescripcionDeLaCategoria50CaracteresMax-0">*</span><span class="xDescripcionDeLaCategoria50CaracteresMax-1"> Descripción de la categoría (50 caracteres máx..)</span>
        </div>
        <div class="imagePicker">
            <p class="seleccionaUnaFotoParaElProducto">Selecciona una foto para el producto</p>
            <div class="rectangulo48"></div>
            <img class="nopathCopia6" src=""></img>
            <button class="buttonSel">Seleccionar</button>
            <p class="sueltaElArchivoAqui">Suelta el archivo aqui</p>
            <p class="oBuscaloDesdeElExploradorDeArchivos">ó búscalo desde el explorador de archivos</p>
        </div>
        
        <div class="xCategoriaDelProducto">
          <span class="xCategoriaDelProducto-0">*</span>
          <span class="xCategoriaDelProducto-1"> Categoria del producto</span>
        </div>
        <select class="selectCat"></select>
        <div class="xPrecioVenta">
          <span class="xPrecioVenta-0">*</span><span class="xPrecioVenta-1"> Precio venta</span>
        </div>
        <input class="s000"></input>
        <input class="inputName"></input>
        <div class="xNombreDelProducto20CaracteresMax">
          <span class="xNombreDelProducto20CaracteresMax-0">*</span><span class="xNombreDelProducto20CaracteresMax-1"> Nombre del producto (20 caracteres máx..)</span>
        </div>
        <button class="cancelarButt">Cancelar</button>
        <button class="guardarButt">Guardar</button>
</div>
    )
  }
}

export default NewProduct
