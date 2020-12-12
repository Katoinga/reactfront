import React from 'react';
import DashSidebar from '../components/DashSidebar.js';
import DashTopBar from '../components/DashTopBar.js';
import DashRectangle from '../components/DashRectangle.js';

class AdminDashboardPage extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <DashSidebar color="boton-dash"
                      color2="boton"
                      color3="boton"
                      color4="boton"
                      color5="boton"
                      />
        <DashTopBar color="selectbutton-green"/>
        <DashRectangle/>
      </div>
    )
  }
}

export default AdminDashboardPage
