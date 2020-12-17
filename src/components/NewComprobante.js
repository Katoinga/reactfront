import React  from 'react';
import './styles/NewComprobante.css';
import logoImage from '../images/logo.png'

class NewUser extends React.Component {
  render() {
    return (
      
      <div className="adminPersonalNuevoUsuario">
      <div  class="modal">            <svg preserveAspectRatio="none" viewBox="-0.75 -0.75 801.5 451.5" class="path8"><path d="M 0 0 L 800 0 L 800 450 L 0 450 L 0 0 Z"  /></svg>
            <div class="modalHeader">                <div  class="personal">Comprobante</div>
                <div class="completaElFormularioConLosDatosSolicitados">Completa el formulario con los datos solicitados</div>
                <svg  preserveAspectRatio="none" viewBox="-1.125 -1.125 782.25 2.25" class="divider"><path d="M 0 0 L 779.9999389648438 0"  /></svg>
</div>
            
            <div  class="xNombres50CaracteresMax"><span class="xNombres50CaracteresMax-0">*</span><span class="xNombres50CaracteresMax-1">Comprobante 5342</span></div>
            <div class="xApellidoPaterno30CaracteresMax"><span class="xApellidoPaterno30CaracteresMax-0">*</span><span class="xApellidoPaterno30CaracteresMax-1"> Nombre Cajero Role</span></div>
            <input type="text" id="namecl" name="namecl" class="rectangle58" required  minlength="4" maxlength="50"></input>
            <div class="xApellidoMaterno30CaracteresMax"><span class="xApellidoMaterno30CaracteresMax-0">*</span><span class="xApellidoMaterno30CaracteresMax-1"> Nombre Cliente </span></div>
            <input type="text" id="dni" name="dni" class="rectangle59" required  minlength="7" maxlength="8"></input>
            <div class="xDni8Caracteres"><span class="xDni8Caracteres-0">*</span><span class="xDni8Caracteres-1"> DNI cliente (8 caracteres)</span></div>
            <input type="text" id="date" name="date" class="rectangle60" required  minlength="4" maxlength="50"></input>
            <div  class="xNroCelular9Caracteres"><span class="xNroCelular9Caracteres-0">*</span><span class="xNroCelular9Caracteres-1">Fecha</span></div>
            <input type="text" id="address" name="address" class="rectangle63" required  minlength="1" maxlength="70"></input>
            <div  class="xDireccion70CaracteresMax"><span class="xDireccion70CaracteresMax-0">*</span><span class="xDireccion70CaracteresMax-1"> Dirección (70 caracteres máx..)</span></div>
            <div  class="productos">Productos:</div>
            <div  class="productos-arr">AQUI VA ARREGLO</div>

            
            
            <div  class="total">Total S/.</div>
            <div  class="total-dinero">3131</div>
   
            <button class="buttong">Cancelar</button>
            <button class="buttonc">Salir</button>
</div>
      </div>
    )
  }
}

export default NewUser
