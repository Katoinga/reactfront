import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import LoginPage from './pages/LoginPage.js';
import AdminDashboardPage from './pages/AdminDashboardPage.js';


function App(){

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/admin/login" component={LoginPage}/>
        <Route exact path="/admin/dashboard" component={AdminDashboardPage}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
