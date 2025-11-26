import { type NextFunction, type Request, type Response } from 'express'
import { inputCategoryValidation } from '../validations/category.validation'
import {
  deleteCategory,
  getCategories,
  getCategoryById,
  insertCategory,
  updateCategory
} from '../services/category.service'

export const getAllCategories = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | undefined> => {
  try {
    const data = await getCategories()
    return res.status(200).json({
      error: null,
      message: 'Pengambilan semua data berhasil',
      data
    })
  } catch (error: Error | unknown) {
    next(
      new Error(
        'Error pada file src/controllers/category.controller.ts: getAllCategories - ' +
          String((error as Error).message)
      )
    )
  }
}

export const getDataCategoryById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | undefined> => {
  try {
    const { id } = req.params
    const category = await getCategoryById(parseInt(id))
    if (category === null) {
      return res.status(404).json({
        error: 'Category tidak ditemukan',
        message: 'Pengambilan data gagal',
        data: null
      })
    }
    return res.status(200).json({
      error: null,
      message: 'Pengambilan data sukses',
      data: category
    })
  } catch (error: Error | unknown) {
    next(
      new Error(
        'Error pada file src/controllers/category.controller.ts : getDataCategoryById - ' +
          String((error as Error).message)
      )
    )
  }
}

export const insertDataCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | undefined> => {
  try {
    const { error, value } = inputCategoryValidation(req.body)
    if (error != null) {
      return res.status(400).json({
        error: error.details[0].message,
        message: 'Input data gagal',
        data: value
      })
    }
    const category = await insertCategory(value)
    return res.status(200).json({
      error: null,
      message: 'Input data sukses',
      data: category
    })
  } catch (error: Error | unknown) {
    next(
      new Error(
        'Error pada file src/controllers/category.controller.ts : insertDataCategory - ' +
          String((error as Error).message)
      )
    )
  }
}

export const updateDataCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | undefined> => {
  try {
    const { id } = req.params
    const { error, value } = inputCategoryValidation(req.body)
    if (error != null) {
      return res.status(400).json({
        error: error.details[0].message,
        message: 'Update data gagal',
        data: value
      })
    }
    const data = await updateCategory({ ...value, id: parseInt(id) })
    return res.status(200).json({
      error: null,
      message: 'Update data sukses',
      data
    })
  } catch (error: Error | unknown) {
    next(
      new Error(
        'Error pada file src/controllers/category.controller.ts : updateDataCategory - ' +
          String((error as Error).message)
      )
    )
  }
}

export const deleteDataCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | undefined> => {
  try {
    const { id } = req.params
    const data = await deleteCategory(parseInt(id))
    return res.status(200).json({
      error: null,
      message: 'Delete data sukses',
      data
    })
  } catch (error: Error | unknown) {
    next(
      new Error(
        'Error pada file src/controllers/category.controller.ts : deleteDataCategory - ' +
          String((error as Error).message)
      )
    )
  }
}
