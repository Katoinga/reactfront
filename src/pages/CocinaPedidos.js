import React from 'react';

import CocinaTopBar from '../components/CocinaTopBar.js';
import RecordOrders from '../components/RecordOrders.js';
import Comanda from '../components/Comanda.js';
import CocinaPreparacion from '../components/CocinaPreparacion.js';

class CocinaPedidos extends React.Component {
  render() {
    return (
      <div>
        <CocinaTopBar color="select-p"/>
        <CocinaPreparacion/>
        <RecordOrders/>
        <Comanda/>
      </div>
    )
  }
}

export default CocinaPedidos
