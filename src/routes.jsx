import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// import Home from './pages/Home';
import Login from './pages/Login';
import Cadastrar from './pages/Cadastrar';
import EsqSenha from './pages/EsqSenha';
import VerEmail from './pages/VerEmail';


function Routes() {
  return(
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/cadastrar" exact component={Cadastrar} />
      <Route path="/forgot"exact component={EsqSenha} />
      <Route path="/verification" exact component={VerEmail} />
      
      {/* <Route path="/home" component={Home} /> */}
    </BrowserRouter>
  );
}

export default Routes;
