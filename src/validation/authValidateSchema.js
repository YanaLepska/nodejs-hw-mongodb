import Joi from 'joi';

export const registerUserSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Username should be a string',
    'string.min': 'Username should have at least 3 characters',
    'string.max': 'Username should have at most 20 characters',
    'any.required': 'Username is required',
  }),
  email: Joi.string().email().required().messages({
    'any.required': 'Email is required',
  }),
  password: Joi.string().min(4).max(15).required().messages({
    'any.required': 'Password is required',
    'string.min': 'Username should have at least 4 characters',
    'string.max': 'Username should have at most 15 characters',
  }),
});

export const loginUserSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'any.required': 'Email is required',
  }),
  password: Joi.string().required().messages({
    'any.required': 'Password is required',
    'string.min': 'Username should have at least 4 characters',
    'string.max': 'Username should have at most 15 characters',
  }),
});

export const resetEmailSchema = Joi.object({
  email: Joi.string().email().required(),
});


export const resetPasswordSchema = Joi.object({
  password: Joi.string().min(4).max(15).required(),
  token: Joi.string().required(),
});
