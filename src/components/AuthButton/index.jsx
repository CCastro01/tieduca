import React from 'react';

import './styles.css';

 function AuthButton({props, title}) {
  return (
    <input className="AuthBtn" title="" type="submit" {...props}/>
  )
}

export default AuthButton;