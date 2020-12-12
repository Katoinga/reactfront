import React from 'react';
import DashSidebar from '../components/DashSidebar.js';
import DashTopBar from '../components/DashTopBar.js';

class AdminEstadisticasPage extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <DashSidebar color="boton"
                      color2="boton"
                      color3="boton"
                      color4="boton-statistic"
                      color5="boton"
                      />        
          <DashTopBar color="selectbutton-cyan"/>

      </div>
    )
  }
}

export default AdminEstadisticasPage
