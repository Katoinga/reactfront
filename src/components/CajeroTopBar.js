import React from 'react';
import './styles/CocinaTopBar.css';
import logoImage from '../images/logo.png'
import { Link } from 'react-router-dom';

class CajeroTopBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      color : props.color,
      
    }
  }

  render(){
    return(
      <div  class="cocinaPedidos">
      <div  class="topbar">            
      <div  class="header"></div>
      <Link to="/cajero/comprobante">
            <button class="boton-p">Comprobantes</button>
      </Link>
      
            <div  class="userdata">                
            <svg preserveAspectRatio="none" viewBox="-0.75 -0.75 36.75 36.75" class="ellipse1">
              <defs>
                <pattern id="img-ellipse1" patternContentUnits="userSpaceOnUse" width="100%" height="100%">
                  <image href={logoImage} x="0" y="0" width="35.00px" height="35.00px" />
                  </pattern>
                  </defs>
                  <path d="M 17.5 0 C 27.16498184204102 0 35 7.835017204284668 35 17.5 C 35 27.16498184204102 27.16498184204102 35 17.5 35 C 7.835017204284668 35 0 27.16498184204102 0 17.5 C 0 7.835017204284668 7.835017204284668 0 17.5 0 Z" fill="url(#img-ellipse1)" />
                  </svg>
                <div  class="group4">    <div  class="username">Brayan Fernando Guillen Nakagawa</div>
                    <div  class="role">Administrador</div>
</div>
</div>
            <div  class={this.state.color}></div>
            <svg preserveAspectRatio="none" viewBox="1.5 4.5 27 22.0908203125" class="iconMaterialFeaturedPlayList"><path d="M 26.04545593261719 4.5 L 3.954545497894287 4.5 C 2.60454535484314 4.5 1.5 5.604545593261719 1.5 6.954545497894287 L 1.5 24.1363639831543 C 1.5 25.48636245727539 2.60454535484314 26.59090995788574 3.954545497894287 26.59090995788574 L 26.04545593261719 26.59090995788574 C 27.39545631408691 26.59090995788574 28.5 25.48636245727539 28.5 24.1363639831543 L 28.5 6.954545497894287 C 28.5 5.604545593261719 27.39545631408691 4.5 26.04545593261719 4.5 Z M 15 14.31818199157715 L 3.954545497894287 14.31818199157715 L 3.954545497894287 11.8636360168457 L 15 11.8636360168457 L 15 14.31818199157715 Z M 15 9.409090995788574 L 3.954545497894287 9.409090995788574 L 3.954545497894287 6.954545497894287 L 15 6.954545497894287 L 15 9.409090995788574 Z"  /></svg>
</div>


</div>
    )
  }
}
export default CajeroTopBar
