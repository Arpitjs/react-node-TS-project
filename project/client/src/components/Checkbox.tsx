import React, { InputHTMLAttributes, ChangeEvent } from 'react';
import { StyledCheckbox } from '../styles/Checkbox.styled';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type: 'checkbox';
  isChecked: boolean;
  defaultChecked?: boolean;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox = ({ label, isChecked, defaultChecked, handleChange }: CheckboxProps) => {
  return (
    <StyledCheckbox>
      <label htmlFor={label}>{label}</label>
      <input type='checkbox' id={label} checked={isChecked} defaultChecked={defaultChecked} onChange={handleChange} />
    </StyledCheckbox>
  );
};
