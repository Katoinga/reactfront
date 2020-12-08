import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Login'
import DashRectangle from './components/DashRectangle'

const container = document.getElementById('root');

ReactDOM.render(<DashRectangle
                    ingresos = "952.60"
                    efectivo = "1250.50"
                    prodMenu = "25"
                    mesasOcupadas = "18"
                    usuario = "Nombre Apellido"
                  />, container);
