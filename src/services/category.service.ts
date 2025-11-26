import type CategoryType from '../types/category.type'
import prisma from '../utils/client'

/**
 * Retrieve all categories from the database.
 * @returns An array of CategoryType or null if not found.
 */
export const getCategories = async (): Promise<CategoryType[] | null> => {
  try {
    const data = await prisma.category.findMany()
    return data.length > 0 ? data : null
  } catch (error) {
    console.error('❌ Error fetching all categories:', error)
    throw new Error('Failed to fetch categories')
  }
}

/**
 * Retrieve a single category by its ID.
 * @param id - The ID of the category to retrieve.
 * @returns CategoryType or null if not found.
 */
export const getCategoryById = async (
  id: number
): Promise<CategoryType | null> => {
  try {
    const data = await prisma.category.findUnique({ where: { id } })
    return data
  } catch (error) {
    console.error(`❌ Error fetching category with ID ${id}:`, error)
    throw new Error('Failed to fetch category by ID')
  }
}

/**
 * Insert a new category into the database.
 * @param payload - Category data excluding auto-generated fields.
 * @returns The created CategoryType record.
 */
export const insertCategory = async (
  payload: Omit<CategoryType, 'id'>
): Promise<CategoryType> => {
  try {
    const data = await prisma.category.create({ data: payload })
    return data
  } catch (error) {
    console.error('❌ Error inserting category:', error)
    throw new Error('Failed to insert category')
  }
}

/**
 * Update an existing category.
 * @param payload - Category data including the ID to update.
 * @returns The updated CategoryType record.
 */
export const updateCategory = async (
  payload: CategoryType
): Promise<CategoryType> => {
  try {
    const data = await prisma.category.update({
      where: { id: payload.id },
      data: { ...payload }
    })
    return data
  } catch (error) {
    console.error(`❌ Error updating category with ID ${payload.id}:`, error)
    throw new Error('Failed to update category')
  }
}

/**
 * Delete a category by its ID.
 * @param id - The ID of the category to delete.
 * @returns The deleted CategoryType record.
 */
export const deleteCategory = async (id: number): Promise<CategoryType> => {
  try {
    const data = await prisma.category.delete({ where: { id } })
    return data
  } catch (error) {
    console.error(`❌ Error deleting category with ID ${id}:`, error)
    throw new Error('Failed to delete category')
  }
}
