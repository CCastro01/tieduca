import React from 'react';

import ProjectBanner from '../../components/ProjectBanner';
import AuthInput from '../../components/AuthInput';
import AuthButton from '../../components/AuthButton';

import logoImg from '../../assets/images/logo.svg';


import './styles.css';
import { Link } from 'react-router-dom';

function Login() {

  return (

    <div className="page-login">
      
      
      <ProjectBanner img={logoImg}/>

      <main id="mainLogin">
        <form>
          <legend>Fazer Login</legend>
          <AuthInput label="E-mail" name="email" position="top" />
          <AuthInput label="Senha" name="senha" position="bot" type="password" password />
          <div id="forgot">
            <input type="checkbox" name="lembrar" id="lembrar" />
            <span id="span-lembrar-me">Lembrar-me</span>
            <Link to="/forgot" id="forgot">
              Esqueci minha senha
            </Link>
          </div>


          <AuthButton value="Entrar" />


        </form>

        <div className="contentFooter">
          <div>
            <p>Não tem conta?</p>
            <Link to="/cadastrar">
              Cadastre-se
            </Link>
          </div>
        </div>


      </main>
    </div>
  )

}

export default Login;
