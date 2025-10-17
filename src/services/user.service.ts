import type UserType from '../types/user.type'
import prisma from '../utils/client'

/**
 * Create a new user in the database.
 * 
 * @param payload - User data payload (excluding auto-generated fields)
 * @returns Created user object
 */
export const createUser = async (
  payload: Omit<UserType, 'id' | 'createdAt' | 'updatedAt'>
): Promise<UserType> => {
  try {
    const user = await prisma.user.create({
      data: {
        ...payload
      }
    })
    return user
  } catch (error) {
    console.error('❌ Error creating user:', error)
    throw new Error('Failed to create user')
  }
}

/**
 * Find a user by email for login process.
 * 
 * @param payload - User credentials (email required)
 * @returns User object or null if not found
 */
export const userLogin = async (
  payload: Pick<UserType, 'email'>
): Promise<Partial<UserType> | null> => {
  try {
    const user = await prisma.user.findUnique({
      where: { email: payload.email }
    })

    // Hide sensitive data (e.g., password)
    if (!user) return null
    const { password, ...safeUser } = user
    return safeUser
  } catch (error) {
    console.error('❌ Error during user login:', error)
    throw new Error('Failed to login user')
  }
}
