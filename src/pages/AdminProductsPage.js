import React from 'react';
import DashSidebar from '../components/DashSidebar.js';
import DashTopBar from '../components/DashTopBar.js';

class AdminProductsPage extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <DashSidebar />
      </div>
    )
  }
}

export default AdminProductsPage