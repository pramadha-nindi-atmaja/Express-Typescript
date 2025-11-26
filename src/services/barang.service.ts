import type BarangType from '../types/barang.type'
import prisma from '../utils/client'

/**
 * Retrieve all barang records from the database.
 * @returns An array of BarangType or null if not found.
 */
export const getBarang = async (): Promise<BarangType[] | null> => {
  try {
    const data = await prisma.barang.findMany({
      include: {
        category: true
      }
    })
    return data.length > 0 ? data : null
  } catch (error) {
    console.error('❌ Error fetching all barang:', error)
    throw new Error('Failed to fetch barang')
  }
}

/**
 * Retrieve a single barang by its ID.
 * @param id - The ID of the barang to retrieve.
 * @returns BarangType or null if not found.
 */
export const getBarangById = async (id: number): Promise<BarangType | null> => {
  try {
    const data = await prisma.barang.findUnique({
      where: { id },
      include: {
        category: true
      }
    })
    return data
  } catch (error) {
    console.error(`❌ Error fetching barang with ID ${id}:`, error)
    throw new Error('Failed to fetch barang by ID')
  }
}

/**
 * Insert a new barang record into the database.
 * @param payload - Barang data excluding auto-generated fields.
 * @returns The created BarangType record.
 */
export const insertBarang = async (
  payload: Omit<BarangType, 'id'>
): Promise<BarangType> => {
  try {
    const data = await prisma.barang.create({ data: payload })
    return data
  } catch (error) {
    console.error('❌ Error inserting barang:', error)
    throw new Error('Failed to insert barang')
  }
}

/**
 * Update an existing barang record.
 * @param payload - Barang data including the ID to update.
 * @returns The updated BarangType record.
 */
export const updateBarang = async (
  payload: BarangType
): Promise<BarangType> => {
  try {
    const data = await prisma.barang.update({
      where: { id: payload.id },
      data: { ...payload }
    })
    return data
  } catch (error) {
    console.error(`❌ Error updating barang with ID ${payload.id}:`, error)
    throw new Error('Failed to update barang')
  }
}

/**
 * Delete a barang record by its ID.
 * @param id - The ID of the barang to delete.
 * @returns The deleted BarangType record.
 */
export const deleteBarang = async (id: number): Promise<BarangType> => {
  try {
    const data = await prisma.barang.delete({ where: { id } })
    return data
  } catch (error) {
    console.error(`❌ Error deleting barang with ID ${id}:`, error)
    throw new Error('Failed to delete barang')
  }
}
