import React from 'react';
import '../styles/button.css';

const Button = ({ text, type, ClearAll, ...rest }) => {
  return (
    <button
      className={text === 'Add' ? 'btn_add' : 'btn_clear'}
      type={type}
      onClick={ClearAll}
      {...rest}
    >
      {text}
    </button>
  );
};

export default Button;
