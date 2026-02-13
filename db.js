// import 'dotenv/config'
// import { neon } from '@neondatabase/serverless'

// console.log("DATABASE_URL:", process.env.DATABASE_URL)

// export const sql = neon(process.env.DATABASE_URL)


import dotenv from 'dotenv'
dotenv.config({ path: './.env' })

import { neon } from '@neondatabase/serverless'

console.log("DATABASE_URL:", process.env.DATABASE_URL)

export const sql = neon(process.env.DATABASE_URL)
