import React from 'react';
import DashSidebar from '../components/DashSidebar.js';
import DashTopBar from '../components/DashTopBar.js';

class AdminPersonalPage extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <DashSidebar/>
        <DashTopBar color="selectbutton-orange"/>

      </div>
    )
  }
}

export default AdminPersonalPage
