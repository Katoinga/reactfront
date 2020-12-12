import React from 'react';
import DashSidebar from '../components/DashSidebar.js';
import DashTopBar from '../components/DashTopBar.js';

class AdminProductsPage extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <DashSidebar color="boton"
                      color2="boton-products"
                      color3="boton"
                      color4="boton"
                      color5="boton"
                      /> 
        <DashTopBar color="selectbutton-yellow"/>

      </div>
    )
  }
}

export default AdminProductsPage
