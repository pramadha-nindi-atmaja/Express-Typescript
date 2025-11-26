/**
 * Express Middleware Configuration
 * ---------------------------------
 * This file sets up the core Express middleware used across the app:
 * - CORS configuration
 * - JSON parsing
 * - Route mounting
 *
 * All incoming requests will pass through these middlewares before
 * reaching specific route handlers.
 */

import express from 'express'
import cors from 'cors'
import '../utils/winston' // Logging utility (using Winston)
import app from '../routes' // Main router entry point

// Initialize a new Express instance for middleware configuration
const appMiddleware = express()

/**
 * Enable Cross-Origin Resource Sharing (CORS)
 * --------------------------------------------
 * Allows frontend apps from different origins to communicate
 * with this backend API securely.
 *
 * - origin: true → dynamically allows requests from any origin
 * - credentials: true → enables cookies / authorization headers
 * - methods: defines allowed HTTP methods
 */
appMiddleware.use(
  cors({
    origin: true,
    credentials: true,
    preflightContinue: false,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'
  })
)

// Handle preflight (OPTIONS) requests globally
appMiddleware.options('*', cors())

/**
 * Body Parser Middleware
 * -----------------------
 * Automatically parses incoming requests with JSON payloads
 * and makes them available under req.body.
 */
appMiddleware.use(express.json())

/**
 * Main Route Middleware
 * ----------------------
 * Mounts the main application router (from /routes).
 * All defined routes and their handlers will be accessible from here.
 */
appMiddleware.use(app)

/**
 * Export Middleware
 * ------------------
 * Export the configured middleware instance for use in the main server file.
 */
export default appMiddleware
