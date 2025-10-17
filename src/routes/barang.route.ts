/**
 * Barang Routes
 * --------------
 * This router handles all CRUD operations related to "Barang" (items).
 * Each route is protected by authentication middleware to ensure only
 * authorized users can access or modify data.
 */

import { Router } from 'express'

// Controllers
import {
  deleteDataBarang,
  getAllBarang,
  getDataBarangById,
  insertDataBarang,
  updateDataBarang
} from '../controllers/barang.contoller'

// Middleware (authentication / error handling)
import { autenticate } from '../controllers/error.controller'


const barangRouter = Router()

/**
 * @route   GET /barang
 * @desc    Retrieve all barang records
 * @access  Protected
 */
barangRouter.get('/barang', autenticate, getAllBarang)

/**
 * @route   GET /barang/:id
 * @desc    Retrieve a single barang by its ID
 * @access  Protected
 */
barangRouter.get('/barang/:id', autenticate, getDataBarangById)

/**
 * @route   POST /barang
 * @desc    Create a new barang record
 * @access  Protected
 */
barangRouter.post('/barang', autenticate, insertDataBarang)

/**
 * @route   PUT /barang/:id
 * @desc    Update an existing barang record by ID
 * @access  Protected
 */
barangRouter.put('/barang/:id', autenticate, updateDataBarang)

/**
 * @route   DELETE /barang/:id
 * @desc    Delete a barang record by ID
 * @access  Protected
 */
barangRouter.delete('/barang/:id', autenticate, deleteDataBarang)

export default barangRouter
