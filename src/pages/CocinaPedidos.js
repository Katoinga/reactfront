import React from 'react';

import CocinaTopBar from '../components/CocinaTopBar.js';
import RecordOrders from '../components/RecordOrders.js';

class CocinaPedidos extends React.Component {
  render() {
    return (
      <div>
        <CocinaTopBar color="select-p"/>
        <RecordOrders/>
      </div>
    )
  }
}

export default CocinaPedidos
