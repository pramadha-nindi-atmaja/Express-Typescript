import { Router } from 'express'
import {
  deleteDataCategory,
  getAllCategories,
  getDataCategoryById,
  insertDataCategory,
  updateDataCategory
} from '../controllers/category.controller'

const categoryRouter = Router()

// Routes for Category CRUD operations
categoryRouter.get('/categories', getAllCategories)
categoryRouter.get('/categories/:id', getDataCategoryById)
categoryRouter.post('/categories', insertDataCategory)
categoryRouter.put('/categories/:id', updateDataCategory)
categoryRouter.delete('/categories/:id', deleteDataCategory)

export default categoryRouter
