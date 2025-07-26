import dotenv from 'dotenv'; dotenv.config();

const getEnv = (key: string): string => {
  const val = process.env[key]
  if (!val) throw new Error(`.env: missing required ${key} key.`)
  return val;
} 

export {
  getEnv
}