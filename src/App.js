import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import LoginPage from './pages/LoginPage.js';
import AdminDashboardPage from './pages/AdminDashboardPage.js';
import AdminProductsPage from './pages/AdminProductsPage.js';
import AdminPersonalPage from './pages/AdminPersonalPage.js';
import AdminEstadisticasPage from './pages/AdminEstadisticasPage.js';
import AdminEditarCuPage from './pages/AdminEditarCuPage.js';
import CocinaPedidos from './pages/CocinaPedidos.js';
import CocinaProductos from './pages/CocinaProductos.js';
import CajeroComprobante from './pages/CajeroComprobante.js';
import NewComprob from './pages/NewComprob.js';
import NewComprob2 from './pages/NewComprob2.js';
import AddProduct from './pages/AddProduct.js';
import AddUser from './pages/AddUser.js';
import EditUsers from './pages/EditUsers.js';
import EditProducts from './pages/EditProducts.js';
import AddCategory from './pages/AddCategory.js';
import EditCategorys from './pages/EditCategorys.js';


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
        <Route exact path="/cocina/login" component={LoginPage}/>
        <Route exact path="/cocina/pedidos" component={CocinaPedidos}/>
        <Route exact path="/cocina/productos" component={CocinaProductos}/>
        <Route exact path="/cajero/comprobante" component={CajeroComprobante}/>
        <Route exact path="/cajero/newcomprobante" component={NewComprob}/>
        <Route exact path="/cajero/newcomprobante2" component={NewComprob2}/>
        <Route exact path="/admin/products/add" component={AddProduct}/>
        <Route exact path="/admin/products/edit" component={EditProducts}/>
        <Route exact path="/admin/add-user" component={AddUser}/>
        <Route exact path="/admin/edit-user" component={EditUsers}/>
        <Route exact path="/admin/add-category" component={AddCategory}/>
        <Route exact path="/admin/edit-category" component={EditCategorys}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
