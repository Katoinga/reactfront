import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import LoginPage from './pages/LoginPage.js';
import AdminDashboardPage from './pages/AdminDashboardPage.js';
import AdminProductsPage from './pages/AdminProductsPage.js';
import AdminPersonalPage from './pages/AdminPersonalPage.js';
import AdminEstadisticasPage from './pages/AdminEstadisticasPage.js';
import AdminEditarCuPage from './pages/AdminEditarCuPage.js';


function App(){

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/admin/login" component={LoginPage}/>
        <Route exact path="/admin/dashboard" component={AdminDashboardPage}/>
        <Route exact path="/admin/products" component={AdminProductsPage}/>
        <Route exact path="/admin/personal" component={AdminPersonalPage}/>
        <Route exact path="/admin/estadisticas" component={AdminEstadisticasPage}/>
        <Route exact path="/admin/editar-cuenta" component={AdminEditarCuPage}/>

      </Switch>
    </BrowserRouter>
  )
}

export default App
