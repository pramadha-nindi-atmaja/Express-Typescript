import Joi, { ValidationResult } from 'joi'
import type BarangType  from '../types/barang.type'

export const validateBarangInput = (
  payload: BarangType
): ValidationResult<BarangType> => {
  const schema = Joi.object<BarangType>({
    nama: Joi.string()
      .trim()
      .required()
      .messages({
        'string.base': 'Nama barang harus berupa teks',
        'string.empty': 'Nama barang tidak boleh kosong',
        'any.required': 'Nama barang wajib diisi'
      }),

    jumlah: Joi.number()
      .required()
      .messages({
        'number.base': 'Jumlah harus berupa angka',
        'any.required': 'Jumlah wajib diisi'
      }),

    harga: Joi.number()
      .required()
      .messages({
        'number.base': 'Harga harus berupa angka',
        'any.required': 'Harga wajib diisi'
      })
  })

  return schema.validate(payload, { abortEarly: false })
}
