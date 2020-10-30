import React from 'react';

import ProffyBanner from '../../components/ProffyBanner';
import FormCadastro from '../../components/Cadastro'



import logoImg from '../../assets/images/logo-white.svg';


import './styles.css';
import { Link } from 'react-router-dom';

function Cadastrar() {

  return (
    <div className="page-cadastar">

    <main>
      <form>
        
        <FormCadastro/>

      </form>
      
    </main>
      <ProffyBanner img={logoImg}/>
    </div>
  )

}

export default Cadastrar;
