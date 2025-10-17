import Joi, { ValidationResult } from 'joi'
import type UserType from '../types/user.type'

export const validateUserInput = (
  payload: UserType
): ValidationResult<UserType> => {
  const schema = Joi.object<UserType>({
    user_id: Joi.string().trim().allow(null, ''),

    email: Joi.string()
      .trim()
      .email({ tlds: { allow: false } })
      .required()
      .messages({
        'string.base': 'Email harus berupa teks',
        'string.empty': 'Email tidak boleh kosong',
        'string.email': 'Format email tidak valid',
        'any.required': 'Email wajib diisi'
      }),

    nama: Joi.string().trim().required().messages({
      'string.base': 'Nama harus berupa teks',
      'string.empty': 'Nama tidak boleh kosong',
      'any.required': 'Nama wajib diisi'
    }),

    password: Joi.string().min(6).max(20).required().messages({
      'string.base': 'Password harus berupa teks',
      'string.empty': 'Password tidak boleh kosong',
      'string.min': 'Password minimal 6 karakter',
      'string.max': 'Password maksimal 20 karakter',
      'any.required': 'Password wajib diisi'
    }),

    confirmPassword: Joi.any()
      .equal(Joi.ref('password'))
      .required()
      .label('Konfirmasi Password')
      .messages({
        'any.only': '{{#label}} tidak sama dengan password',
        'any.required': '{{#label}} wajib diisi'
      }),

    role: Joi.string().trim().allow(null, '')
  })

  return schema.validate(payload, { abortEarly: false })
}

export const validateUserLogin = (
  payload: UserType
): ValidationResult<UserType> => {
  const schema = Joi.object<UserType>({
    email: Joi.string()
      .trim()
      .email({ tlds: { allow: false } })
      .required()
      .messages({
        'string.base': 'Email harus berupa teks',
        'string.empty': 'Email tidak boleh kosong',
        'string.email': 'Format email tidak valid',
        'any.required': 'Email wajib diisi'
      }),

    password: Joi.string().required().messages({
      'string.base': 'Password harus berupa teks',
      'string.empty': 'Password tidak boleh kosong',
      'any.required': 'Password wajib diisi'
    })
  })

  return schema.validate(payload, { abortEarly: false })
}
