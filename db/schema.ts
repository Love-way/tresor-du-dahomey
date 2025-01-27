import { pgTable, serial, varchar, integer, text, timestamp } from "drizzle-orm/pg-core";

// Define a users table
export const users = pgTable("users", {
  id: serial("id").primaryKey(), // Auto-incrementing primary key
  name: varchar("name", { length: 255 }).notNull(), // Variable-length string
  email: varchar("email", { length: 255 }).notNull().unique(), // Unique email
  age: integer("age"), // Integer type
  bio: text("bio"), // Text type for longer strings
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(), // Timestamp with default now()
});