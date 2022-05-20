import React, { InputHTMLAttributes } from 'react';
import { Path, DeepMap, FieldErrors, UseFormRegister } from 'react-hook-form';
import { StyledInput } from './styled/Input.styled';
import { FormTypes } from '../pages/SignupPage/Form';
import { LoginFormTypes } from '../pages/LoginPage/Form';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: Path<FormTypes>;
  label: string;
  type: 'text' | 'number' | 'email' | 'password';
  placeholder: string;
  register: UseFormRegister<FormTypes>;
  errors?: Partial<DeepMap<FormTypes, FieldErrors>>;
}

export const Input = ({ name, label, type, placeholder, register, errors }: InputProps) => {
  const errorMsg: string = errors?.[name]?.message;
  const hasError = Boolean(errors && errorMsg);

  return (
    <StyledInput>
      <label htmlFor={name}>{label}</label>
      <input type={type} id={name} placeholder={placeholder} {...(register && register(name))} name={name} />
      {hasError && <p>{errorMsg}</p>}
    </StyledInput>
  );
};

