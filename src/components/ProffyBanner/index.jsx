import React from 'react';

import logoImg from '../../assets/images/logo.svg';

import './styles.css';

function ProffyBanner() {

  return (
    <div className="bannerContainer">
      <div className="containerText">
        <img src={logoImg} alt="Proffy" />
      </div>
    </div>
  );

}

export default ProffyBanner;
