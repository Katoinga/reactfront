import React from 'react';

import Comanda from '../components/Comanda.js';
import CajeroRecords from '../components/CajeroRecords.js';
import CajeroTopBar from '../components/CajeroTopBar.js';
import CajeroGenerarComprobantes from '../components/CajeroGenerarComprobantes.js';

class CajeroComprobante extends React.Component {
  render() {
    return (
      <div>
        <CajeroTopBar color="select-c"/>
        <CajeroRecords/>
        <CajeroGenerarComprobantes/>
      </div>
    )
  }
}

export default CajeroComprobante
