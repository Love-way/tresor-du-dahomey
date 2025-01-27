import "dotenv/config";
import type { Config } from "drizzle-kit";

export default {
    schema: "./db/schema.ts", 
    out: "./drizzle", // Path to store migrations
    driver: "pg", // Or "mysql" / "sqlite"
    dbCredentials: {
        connectionString: process.env.DATABASE_URL!,
  },
} satisfies Config;
