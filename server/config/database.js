import pg from "pg";
import dotenv from "dotenv";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../.env") });


var connectionString = process.env.DATABASE_URL
console.log(connectionString)

const config = {
  connectionString: process.env.DATABASE_URL,
  
  ssl: {
    rejectUnauthorized: false
  }
};

export const pool = new pg.Pool(config);
