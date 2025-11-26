import Joi, { ValidationResult } from 'joi'

interface BarangInput {
  nama: string
  jumlah: number
  harga: number
  categoryId?: number | null
}

export const validateBarangInput = (payload: BarangInput): ValidationResult => {
  const schema = Joi.object({
    nama: Joi.string().trim().required().messages({
      'string.base': 'Nama barang harus berupa teks',
      'string.empty': 'Nama barang tidak boleh kosong',
      'any.required': 'Nama barang wajib diisi'
    }),

    jumlah: Joi.number().required().messages({
      'number.base': 'Jumlah harus berupa angka',
      'any.required': 'Jumlah wajib diisi'
    }),

    harga: Joi.number().required().messages({
      'number.base': 'Harga harus berupa angka',
      'any.required': 'Harga wajib diisi'
    }),

    categoryId: Joi.number().integer().positive().allow(null).optional()
  })

  return schema.validate(payload, { abortEarly: false })
}
