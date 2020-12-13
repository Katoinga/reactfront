import React  from 'react';
import './styles/NewUser.css';
import logoImage from '../images/logo.png'

class EditUser extends React.Component {
  render() {
    return (
      
      <div className="adminPersonalNuevoUsuario">
      <div  class="modal">            <svg preserveAspectRatio="none" viewBox="-0.75 -0.75 801.5 451.5" class="path8"><path d="M 0 0 L 800 0 L 800 450 L 0 450 L 0 0 Z"  /></svg>
            <div class="modalHeader">                <div  class="personal">Personal</div>
                <div class="completaElFormularioConLosDatosSolicitados">Completa el formulario con los datos solicitados</div>
                <svg  preserveAspectRatio="none" viewBox="-1.125 -1.125 782.25 2.25" class="divider"><path d="M 0 0 L 779.9999389648438 0"  /></svg>
</div>
            <div  class="imagePicker">                <div  class="seleccionaUnaFotoParaElUsuario">Selecciona una foto para el usuario</div>
                <div  class="rectangle48"></div>
                <img src={logoImage} className="nopathCopia6"></img>
                <div  class="sueltaElArchivoAqui">Suelta el archivo aqui</div>
                <div class="oBuscaloDesdeElExploradorDeArchivos">ó búscalo desde el explorador de archivos</div>
                <button class="buttonselect">Seleccionar</button>
</div>
            
            <input type="text" id="nombre" name="nombre" class="rectangle46" required  minlength="4" maxlength="50" ></input>

            <div  class="xNombres50CaracteresMax"><span class="xNombres50CaracteresMax-0">*</span><span class="xNombres50CaracteresMax-1"> Nombres (50 caracteres máx..)</span></div>
            <input type="text" id="apellidom" name="apellidom" class="rectangle57" required  minlength="4" maxlength="30"></input>
            <div class="xApellidoPaterno30CaracteresMax"><span class="xApellidoPaterno30CaracteresMax-0">*</span><span class="xApellidoPaterno30CaracteresMax-1"> Apellido Paterno (30 caracteres máx..)</span></div>
            <input type="text" id="apellidop" name="apellidop" class="rectangle58" required  minlength="4" maxlength="30"></input>
            <div class="xApellidoMaterno30CaracteresMax"><span class="xApellidoMaterno30CaracteresMax-0">*</span><span class="xApellidoMaterno30CaracteresMax-1"> Apellido Materno (30 caracteres máx..)</span></div>
            <input type="text" id="dni" name="dni" class="rectangle59" required  minlength="7" maxlength="8"></input>
            <div class="xDni8Caracteres"><span class="xDni8Caracteres-0">*</span><span class="xDni8Caracteres-1"> DNI (8 caracteres)</span></div>
            <input type="text" id="phone" name="phone" class="rectangle60" required  minlength="7" maxlength="9"></input>
            <div  class="xNroCelular9Caracteres"><span class="xNroCelular9Caracteres-0">*</span><span class="xNroCelular9Caracteres-1"> Nro. Celular (9 caracteres)</span></div>
            <input type="password" id="pass" name="pass" class="rectangle61" required  minlength="1" maxlength="20"></input>
            <div  class="xContrasena20CaracteresMax"><span class="xContrasena20CaracteresMax-0">*</span><span class="xContrasena20CaracteresMax-1"> Contraseña (20 caracteres máx..)</span></div>
            <input type="text" id="address" name="address" class="rectangle63" required  minlength="1" maxlength="70"></input>
            <div  class="xDireccion70CaracteresMax"><span class="xDireccion70CaracteresMax-0">*</span><span class="xDireccion70CaracteresMax-1"> Dirección (70 caracteres máx..)</span></div>
            <div class="xSeleccionarRolDelUsuario"><span class="xSeleccionarRolDelUsuario-0">*</span><span class="xSeleccionarRolDelUsuario-1"> Seleccionar rol del usuario</span></div>
            <select id="role" name="role" form="roleform" class="rectangle64">
            <option value="admin">Administrador</option>
            <option value="user">Usuario</option>
            
            </select>          
            <div class="xSeleccionarElEstadoDelUsuario"><span class="xSeleccionarElEstadoDelUsuario-0">*</span><span class="xSeleccionarElEstadoDelUsuario-1"> Seleccionar el estado del usuario</span></div>
            <select id="status" name="status" form="statusform" class="rectangle65">
            <option value="admin">Activo</option>
            <option value="user">Inactivo</option>
            
            </select>        
            <button class="buttong">Guardar</button>
            <button class="buttonc">Cancelar</button>
</div>
      </div>
    )
  }
}

export default EditUser
