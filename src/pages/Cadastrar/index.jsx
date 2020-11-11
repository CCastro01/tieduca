import React from 'react';

import ProjectBanner from '../../components/ProjectBanner';
import AuthInput from '../../components/AuthInput';
import AuthButton from '../../components/AuthButton';

import logoImg from '../../assets/images/logo-white.svg';


import './styles.css';
import { Link } from 'react-router-dom';

function Cadastrar() {

  return (
    <div className="page-cadastar">

    <main className="main-cadastrar">
      <form>
          <legend>Cadastro</legend> 
          
            <p id="p">
            Preencha os dados abaixo <br/> 
            para começar.
            </p>

          <AuthInput label="Nome" name="nome" position="top" />
          <AuthInput label="E-mail" name="email" position="center" />
          <AuthInput label="Senha" name="senha" position="bot" type="password" password />
          <br/><br/>
          
          <AuthButton id="cadastro" value="Concluir cadastro" />
          
      </form>
      
    </main>
      <ProjectBanner img={logoImg}/>
    </div>
  )

}

export default Cadastrar;