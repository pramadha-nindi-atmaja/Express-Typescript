import bcrypt from 'bcrypt'

const saltRounds = 10

// Hash password secara asynchronous
export const encrypt = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(saltRounds)
  const hash = await bcrypt.hash(password, salt)
  return hash
}

// Bandingkan password dengan hash
export const compare = async (
  password: string,
  hash: string
): Promise<boolean> => {
  return await bcrypt.compare(password, hash)
}
