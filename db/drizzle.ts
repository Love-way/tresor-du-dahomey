import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "./schema"; // Import your schema

// Ensure DATABASE_URL is defined
if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is not defined");
}

// Create a Neon connection
const sql = neon(process.env.DATABASE_URL!);

// Create a Drizzle database instance and load the schema
const db = drizzle(sql, { schema });

export default db;
