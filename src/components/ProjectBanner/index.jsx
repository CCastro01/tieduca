import React from 'react';


import './styles.css';

function ProjectBanner({img}) {

  return (
    <div className="bannerContainer">
      <div className="containerText">
        <img src={img} alt="Logo" />
      </div>
    </div>
  );

}

export default ProjectBanner;
