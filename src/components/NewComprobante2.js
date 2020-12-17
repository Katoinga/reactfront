import React  from 'react';
import './styles/NewCom.css';
import logoImage from '../images/logo.png'

class NewComprobante2 extends React.Component {
  render() {
    return (
      
      <div className="adminPersonalNuevoUsuario">
      <div  class="modelo">            <svg preserveAspectRatio="none" viewBox="-0.75 -0.75 801.5 451.5" class="path8"><path d="M 0 0 L 800 0 L 800 450 L 0 450 L 0 0 Z"  /></svg>
            <div class="modeloHeader">                <div  class="personal">Comprobante</div>
                <div class="completaElFormularioConLosDatosSolicitados">Completa el formulario con los datos solicitados</div>
                <svg  preserveAspectRatio="none" viewBox="-1.125 -1.125 782.25 2.25" class="divider"><path d="M 0 0 L 779.9999389648438 0"  /></svg>
</div>
            
            <div  class="comprobnt"><span class="comprobnt-0">*</span><span class="comprobnt-1">Comprobante 5342</span></div>
            <div class="nomcaj"><span class="nomcaj-0">*</span><span class="nomcaj-1"> Nombre Cajero Role</span></div>
            <label type="text" id="namecl" name="namecl" class="rectangle58t" >DATA</label>
            <div class="matcaj"><span class="matcaj-0">*</span><span class="matcaj-1"> Nombre Cliente </span></div>
            <label id="dni" name="dni" class="rectangle59t" >DATA2</label>
            <div class="xDni8Caracteres"><span class="xDni8Caracteres-0">*</span><span class="xDni8Caracteres-1"> DNI cliente (8 caracteres)</span></div>
            <label id="date" name="date" class="rectangle60t" >DATA3</label>
            <div  class="xNroCelular9Caracteres"><span class="xNroCelular9Caracteres-0">*</span><span class="xNroCelular9Caracteres-1">Fecha</span></div>
            <label id="address" name="address" class="rectangle63t" >DATA4</label>
            <div  class="xDireccion70CaracteresMax"><span class="xDireccion70CaracteresMax-0">*</span><span class="xDireccion70CaracteresMax-1"> Dirección (70 caracteres máx..)</span></div>
            <div  class="texto">Productos:</div>
            <div  class="productos-arr">AQUI VA ARREGLO</div>

            
            
            <div  class="total">Total S/.</div>
            <div  class="total-dinero">3131</div>
   
            <button class="buttone">Cancelar</button>
            <button class="buttona">Salir</button>
</div>
      </div>
    )
  }
}

export default NewComprobante2
