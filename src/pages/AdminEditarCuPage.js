import React from 'react';
import DashSidebar from '../components/DashSidebar.js';
import DashTopBar from '../components/DashTopBar.js';

class AdminEditarCuPage extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <DashSidebar color="boton"
                      color2="boton"
                      color3="boton"
                      color4="boton"
                      color5="boton-acc"
                      />
        <DashTopBar color="selectbutton-purple"/>

      </div>
    )
  }
}

export default AdminEditarCuPage
