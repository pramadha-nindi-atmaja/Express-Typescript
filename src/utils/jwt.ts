import 'dotenv/config'
import jwt, { JwtPayload, SignOptions } from 'jsonwebtoken'
import type UserType from '../types/user.type'

/**
 * Generate an access token for authenticated users.
 * The token expires based on the JWT_EXPIRES_IN environment variable.
 */
export const generateAccessToken = (user: UserType): string => {
  const secret = process.env.JWT_SECRET
  if (!secret)
    throw new Error('JWT_SECRET is not defined in environment variables')

  const options: SignOptions = {
    expiresIn: process.env.JWT_EXPIRES_IN || '1800s' // Default 30 minutes
  }

  return jwt.sign(user, secret, options)
}

/**
 * Generate a refresh token used to obtain a new access token.
 * The token expires based on the JWT_REFRESH_EXPIRES_IN variable.
 */
export const generateRefreshToken = (user: UserType): string => {
  const refreshSecret = process.env.JWT_REFRESH_SECRET
  if (!refreshSecret)
    throw new Error(
      'JWT_REFRESH_SECRET is not defined in environment variables'
    )

  const options: SignOptions = {
    expiresIn: process.env.JWT_REFRESH_EXPIRES_IN || '7d' // Default 7 days
  }

  return jwt.sign(user, refreshSecret, options)
}

/**
 * Verify the validity of a refresh token.
 * Returns the decoded payload if valid, otherwise null.
 */
export const verifyRefreshToken = (token: string): JwtPayload | null => {
  try {
    const refreshSecret = process.env.JWT_REFRESH_SECRET
    if (!refreshSecret) throw new Error('JWT_REFRESH_SECRET is not defined')
    return jwt.verify(token, refreshSecret) as JwtPayload
  } catch {
    return null
  }
}

/**
 * Verify the validity of an access token.
 * Returns the decoded payload if valid, otherwise null.
 */
export const verifyAccessToken = (token: string): JwtPayload | null => {
  try {
    const secret = process.env.JWT_SECRET
    if (!secret) throw new Error('JWT_SECRET is not defined')
    return jwt.verify(token, secret) as JwtPayload
  } catch {
    return null
  }
}

/**
 * Parse a JWT token manually (without verification).
 * Useful for decoding payloads when signature verification is not required.
 */
export const parseJWT = (token: string): UserType => {
  try {
    const base64Payload = token.split('.')[1]
    const payloadBuffer = Buffer.from(base64Payload, 'base64')
    return JSON.parse(payloadBuffer.toString()) as UserType
  } catch {
    throw new Error('Invalid token format')
  }
}
