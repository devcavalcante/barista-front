import { InputHTMLAttributes } from 'react';
import * as S from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

function Input({ name, label, ...rest}: InputProps) {
  return (
    <S.Container>
      <label htmlFor={name}>{label}</label>
      <input id={name} {...rest}/>
    </S.Container>
  );
};

export default Input;