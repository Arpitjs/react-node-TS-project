import React from 'react';
import { StyledSignupPage, StyledNavLink } from './styled/Signup.styled';
import { Form } from './Form';
import { IoChevronBackCircle } from 'react-icons/io5';
import { theme } from '../../styles/theme';

export const SignUpPage = () => {
  return (
    <StyledSignupPage>
      <div>
        <span>
          <StyledNavLink to={'/'}>
            <IoChevronBackCircle size={30} color={theme.color.primary} />
          </StyledNavLink>
        </span>
        <Form />
      </div>
    </StyledSignupPage>
  );
};
