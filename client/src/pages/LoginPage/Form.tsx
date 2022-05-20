import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { joiResolver } from '@hookform/resolvers/joi';
import { loginSchema } from '../../utils/formValidation';
import { StyledForm } from './styled/Form.styled';
import { LoginInput } from '../../components/Input';
import { Button } from '../../components/Button';
import { getAllUsers, loginUser } from '../../services/usersService';
import { UsersState } from '../../state/usersState';

export type LoginFormTypes = {
  email: string;
  password: string;
};

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormTypes>({ resolver: joiResolver(loginSchema) });

  const { setUsers } = UsersState();
  const navigate = useNavigate();

  const onSubmit = async (formData: LoginFormTypes) => {
    const { token } = await loginUser(formData);
    localStorage.setItem('token', token);
    const res = await getAllUsers();

    if (res) {
      setUsers(res);
      navigate('/playground');
    } else {
      // show message
    }
  };

  return (
    <StyledForm noValidate onSubmit={handleSubmit(onSubmit)}>
      <h1>Login</h1>
      <div>
        <LoginInput name='email' label='Email' type='email' placeholder='Please enter your email' login={register} errors={errors} />

        <LoginInput
          name='password'
          label='Password'
          type='password'
          placeholder='Please type your password'
          login={register}
          errors={errors}
        />
      </div>
      <Button type='submit' primary>
        Submit
      </Button>
    </StyledForm>
  );
};
