import React, { InputHTMLAttributes } from 'react';

import './styles.css';

// Extende todas as propriedades do Input do HTML possa receber
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  // Alterando os atributos que possam variar
  label: string;
  name: string;
}

// Pega todas as propriedades que não foi passado, ficando no objeto rest
const Input: React.FC<InputProps> = ({ label, name, ...rest }) => (
  <div className="input-block">
    <label htmlFor={name}>{label}</label>
    {/* Repassar para atributo para o input */}
    <input type="text" id={name} {...rest} />
  </div>
);

export default Input;
