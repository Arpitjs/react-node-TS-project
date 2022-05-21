import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { joiResolver } from '@hookform/resolvers/joi';
import { formSchema } from '../../utils/formValidation';
import { StyledForm } from '../../styles/Form.styled';
import { Input } from '../../components/Input';
import { Checkbox } from '../../components/Checkbox';
import { Button } from '../../components/Button';
import { createUser, getAllUsers } from '../../services/usersService';
import { UsersState } from '../../state/usersState';

export type FormTypes = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordRepeat: string;
  newsletter: boolean;
};

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormTypes>({ resolver: joiResolver(formSchema) });
  const [checkboxValue, setCheckboxValue] = useState(false);

  const { setUsers } = UsersState();
  const navigate = useNavigate();

  const onSubmit = async (formData: FormTypes) => {
    formData.newsletter = checkboxValue;
    await createUser(formData);
    const res = await getAllUsers();

    if (res) {
      setUsers(res);
      navigate('/contacts');
    } else {
      // show message
    }
  };

  return (
    <StyledForm noValidate onSubmit={handleSubmit(onSubmit)}>
      <h1>Sign up</h1>
      <div>
        <Input name='firstName' label='First name' type='text' placeholder='Please enter your name' register={register} errors={errors} />
        <Input name='lastName' label='Last name' type='text' placeholder='Please enter your surname' register={register} errors={errors} />
        <Input name='email' label='Email' type='email' placeholder='Please enter your email' register={register} errors={errors} />
        <Input
          name='password'
          label='Password'
          type='password'
          placeholder='Please type your password'
          register={register}
          errors={errors}
        />
        <Input
          name='passwordRepeat'
          label='Repeat password'
          type='password'
          placeholder='Please repeat your password'
          register={register}
          errors={errors}
        />
        <Checkbox
          type='checkbox'
          label='Want to receive a newsletter?'
          isChecked={checkboxValue}
          handleChange={() => setCheckboxValue(!checkboxValue)}
        />
      </div>
      <Button type='submit' primary>
        Submit
      </Button>
    </StyledForm>
  );
};
