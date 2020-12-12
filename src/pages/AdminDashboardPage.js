import React from 'react';
import DashSidebar from '../components/DashSidebar.js';
import DashTopBar from '../components/DashTopBar.js';

class AdminDashboardPage extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <DashSidebar/>
        <DashTopBar color="selectbutton-yellow"/>
      </div>
    )
  }
}

export default AdminDashboardPage
