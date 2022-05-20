import Joi from 'joi';

export const formSchema = Joi.object({
  firstName: Joi.string().min(3).required().messages({
    'string.empty': 'First name is required',
    'any.required': 'First name is required',
    'string.min': 'First name has to have at least 3 characters',
  }),
  lastName: Joi.string().min(3).required().messages({
    'string.empty': 'Last name is required',
    'any.required': 'Last name is required',
    'string.min': 'Last name has to have at least 3 characters',
  }),
  email: Joi.string()
    .min(6)
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.empty': 'Email is required',
      'any.required': 'Email is required',
      'string.min': 'Email needs to have at least 6 characters',
      'string.email': 'Email must be a valid email',
    }),
  password: Joi.string().min(6).required().label('password').messages({
    'string.empty': 'Password is required',
    'any.required': 'Password is required',
    'string.min': 'Password needs to have at least 6 characters',
  }),
  passwordRepeat: Joi.string().min(6).valid(Joi.ref('password')).required().empty().messages({
    'string.empty': 'Please repeat password',
    'any.required': 'Please repeat password',
    'string.min': 'Password needs to have at least 6 characters',
    'any.only': 'Passwords have to match',
  }),
});

export const loginSchema = Joi.object({
  email: Joi.string()
    .min(6)
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.empty': 'Email is required',
      'any.required': 'Email is required',
      'string.min': 'Email needs to have at least 6 characters',
      'string.email': 'Email must be a valid email',
    }),
  password: Joi.string().min(6).required().label('password').messages({
    'string.empty': 'Password is required',
    'any.required': 'Password is required',
    'string.min': 'Password needs to have at least 6 characters',
  }),
});
