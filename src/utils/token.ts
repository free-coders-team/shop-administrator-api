import jwt from 'jsonwebtoken'

export const generateToken = (payload: any) => {
  const secret = process.env.JWT_SECRET
  if (!secret) return null
  const token = jwt.sign(payload, process.env.JWT_SECRET as string)
  return token
}