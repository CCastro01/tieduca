import React from 'react';

import './styles.css';

 function AuthButton({props}) {
  return (
    <input className="AuthBtn" type="submit" {...props}/>
  )
}

export default AuthButton;