import React from 'react';

import ProjectBanner from '../../components/ProjectBanner';
import AuthInput from '../../components/AuthInput';
import AuthButton from '../../components/AuthButton';

import logoImg from '../../assets/images/logo-white.svg';


import './styles.css';
import { Link } from 'react-router-dom';

function EsqSenha() {

  return (
    <div className="page-esq-senha">

    <main className="main-esq-senha">
      <form>
          <legend>Esqueceu {<br/>} sua senha?</legend> 
          
            <p id="p">
            Vamos resolver isso para você
            </p>

          <AuthInput label="E-mail" name="nome" position="center" />

          <br/>
          
          <AuthButton id="enviar" value="Enviar" />
          
      </form>
      
    </main>
      <ProjectBanner img={logoImg} />
    </div>
  )

}

export default EsqSenha;