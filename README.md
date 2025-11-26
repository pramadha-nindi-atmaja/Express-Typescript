# Express TypeScript API

A RESTful API built with Express.js and TypeScript featuring user authentication and product management.

## Features

- User Registration and Authentication
- JWT-based Token Management
- Product (Barang) Management
- Category Management
- Input Validation with Joi
- Password Encryption with bcrypt
- Database Operations with Prisma ORM
- Comprehensive Error Handling
- Logging with Winston

## API Endpoints

### User Management
- `POST /api/register` - Register a new user
- `POST /api/login` - Login with existing credentials
- `GET /api/refresh` - Refresh access token

### Product (Barang) Management
- `GET /api/barang` - Get all products
- `GET /api/barang/:id` - Get a specific product
- `POST /api/barang` - Create a new product
- `PUT /api/barang/:id` - Update a product
- `DELETE /api/barang/:id` - Delete a product

### Category Management
- `GET /api/categories` - Get all categories
- `GET /api/categories/:id` - Get a specific category
- `POST /api/categories` - Create a new category
- `PUT /api/categories/:id` - Update a category
- `DELETE /api/categories/:id` - Delete a category

## Technologies Used

- Node.js
- Express.js
- TypeScript
- Prisma ORM
- MySQL
- JWT for authentication
- bcrypt for password hashing
- Joi for validation
- Winston for logging

## Setup

1. Clone the repository
2. Install dependencies: `yarn install`
3. Set up environment variables in `.env`
4. Run database migrations: `npx prisma migrate dev`
5. Generate Prisma client: `npx prisma generate`
6. Start the development server: `yarn dev`

## Scripts

- `yarn dev` - Start development server with nodemon
- `yarn build` - Compile TypeScript to JavaScript
- `yarn start` - Compile TypeScript in watch mode
- `yarn prod` - Run production server
- `yarn test` - Run test suite
- `yarn lint` - Check code linting
- `yarn lint:fix` - Fix linting issues
- `yarn format` - Format code with Prettier