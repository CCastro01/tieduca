import React from 'react';

import ProffyBanner from '../../components/ProffyBanner';
import AuthInput from '../../components/AuthInput';
import AuthButton from '../../components/AuthButton';

import logoImg from '../../assets/images/logo-white.svg';


import './styles.css';
import { Link } from 'react-router-dom';

function EsqSenha() {

  return (
    <div className="page-ver-email">

    <main>
      <form>
          <legend>Cadastro</legend> 
          
            <p id="p">
            Preencha os dados abaixo <br/> 
            para começar.
            </p>

          <AuthInput label="Nome" name="nome" position="top" />
          <AuthInput label="E-mail" name="email" position="center" />
          <AuthInput label="Senha" name="senha" position="bot" type="password" password />
          
          <AuthButton id="cadastro" value="Concluir cadastro" />
          
      </form>
      
    </main>
      <ProffyBanner img={logoImg}/>
    </div>
  )

}

export default EsqSenha;