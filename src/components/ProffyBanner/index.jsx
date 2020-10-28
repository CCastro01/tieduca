import React from 'react';


import './styles.css';

function ProffyBanner({img}) {

  return (
    <div className="bannerContainer">
      <div className="containerText">
        <img src={img} alt="Proffy" />
      </div>
    </div>
  );

}

export default ProffyBanner;
