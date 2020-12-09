import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Login'
import DashRectangle from './components/DashRectangle'
import CategoriesDisplay from './components/CategoriesDisplay'
import DashSidebar from './components/DashSidebar'
import DashTopBar from './components/DashTopBar';
const container = document.getElementById('root');

ReactDOM.render(<DashTopBar
                    title="Dashboard"
                    imagePerfil="../images/logo.png"
                    name="Bsadfsdf Ssfsf"
                    role="Administrador"
                    hour="12:25:58"/>, container);
