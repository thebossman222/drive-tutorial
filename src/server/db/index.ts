// filepath: /d:/VScode/drive-tutorial/src/server/db/index.ts

import { createPool, type Pool } from "mysql2/promise";
import { drizzle } from "drizzle-orm/mysql2";

import { env } from "~/env";
import * as schema from "./schema";

/**
 * Cache the database connection in development. This avoids creating a new connection 
 * on every Hot Module Reload (HMR) update.
 */
const globalForDb = globalThis as unknown as {
  pool?: Pool;
  db?: ReturnType<typeof drizzle>;
};

if (!globalForDb.pool) {
  // Create the MySQL (SingleStore) pool
  globalForDb.pool = createPool({
    host: env.SINGLESTORE_HOST,
    user: env.SINGLESTORE_USER,
    password: env.SINGLESTORE_PASS,
    database: env.SINGLESTORE_DB_NAME,
    ssl: {},  // Configure as needed; or remove if not required
    maxIdle: 0,
  });

  // Listen for any pool errors
  globalForDb.pool.on("error", (err: unknown) => {
    console.error("Database pool error:", err);
  });

  // Create the Drizzle instance using the pool and your schema
  globalForDb.db = drizzle(globalForDb.pool, { schema });
}

// Export the single Drizzle DB instance
export const db = globalForDb.db!;
