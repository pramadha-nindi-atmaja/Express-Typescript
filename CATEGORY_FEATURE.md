# Category Feature Documentation

## Overview

The Category feature extends the existing product management system by allowing products to be organized into categories. This enhancement provides better organization and filtering capabilities for the product inventory.

## Database Schema

### Category Table
- `id` (Integer, Primary Key, Auto Increment)
- `name` (String, Required)
- `description` (String, Optional)
- `created_at` (DateTime, Default: Current Timestamp)
- `updated_at` (DateTime, Auto Updated)

### Relationship with Barang Table
The `Barang` table now includes a foreign key `categoryId` that references the `Category` table.

## API Endpoints

### Get All Categories
- **Endpoint**: `GET /api/categories`
- **Description**: Retrieves all categories from the database
- **Response**: Array of category objects

### Get Category by ID
- **Endpoint**: `GET /api/categories/:id`
- **Description**: Retrieves a specific category by its ID
- **Response**: Single category object

### Create Category
- **Endpoint**: `POST /api/categories`
- **Description**: Creates a new category
- **Request Body**:
  ```json
  {
    "name": "Electronics",
    "description": "Electronic devices and gadgets"
  }
  ```
- **Response**: Created category object

### Update Category
- **Endpoint**: `PUT /api/categories/:id`
- **Description**: Updates an existing category
- **Request Body**:
  ```json
  {
    "name": "Home Electronics",
    "description": "Home electronic devices and appliances"
  }
  ```
- **Response**: Updated category object

### Delete Category
- **Endpoint**: `DELETE /api/categories/:id`
- **Description**: Deletes a category by its ID
- **Response**: Deleted category object

## Integration with Products

When retrieving products, the API now includes category information in the response. This allows clients to display products along with their associated category details.

## Validation Rules

### Category Creation/Update
- `name`: Required, minimum 3 characters, maximum 100 characters
- `description`: Optional, maximum 255 characters

## Error Handling

All category operations include proper error handling:
- 404 Not Found for non-existent categories
- 400 Bad Request for validation errors
- 500 Internal Server Error for database issues

## Future Enhancements

Potential future enhancements for the category feature:
- Category hierarchy (parent-child relationships)
- Category images
- Product count per category
- Category-based product filtering