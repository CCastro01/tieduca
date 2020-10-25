import React from 'react';

import './styles.css';



const AuthInput = ({ label, name, position, password, ...rest }) => {

  function labelFocus() {
    const labelText = document.querySelector(`#label${name}`);
    return labelText.className = 'focus';
  }

  function labelBlur() {
    const labelText = document.querySelector(`#label${name}`);
    const textInput = document.querySelector(`#${name}`);
    if (textInput.value === '')
      return labelText.className = 'unfocused';
  }

  function buttonVisibility() {
    const button = document.querySelector(`#button${name}`);
    const textInput = document.querySelector(`#${name}`);
    if (button.innerText === "visibility") {
      textInput.type = "text";
      button.innerText = "visibility_off";
    } else {
      textInput.type = "password"
      button.innerText = "visibility"
    }
}
  

  return (
    <div className="authInput-block">
      <label className="unfocused" id={`label${name}`} htmlFor={name} >{label}</label>
      <input onFocus={labelFocus} onBlur={labelBlur} className={position} id={name} {...rest} />
      {
        password === true ? <span onClick={buttonVisibility} id={`button${name}`} className="material-icons-outlined"> visibility </span> : false
      }
    </div>
  )
}

export default AuthInput;