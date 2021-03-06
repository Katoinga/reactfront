import React from 'react';
import DashSidebar from '../components/DashSidebar.js';
import DashTopBar from '../components/DashTopBar.js';
import DashPersonal from '../components/DashPersonal.js';

class AdminPersonalPage extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <DashSidebar color="boton"
                      color2="boton"
                      color3="boton-personal"
                      color4="boton"
                      color5="boton"
                      />
        <DashTopBar color="selectbutton-orange"/>
        <DashPersonal/>
      </div>
    )
  }
}

export default AdminPersonalPage
