// drizzle.config.ts
import { defineConfig } from "drizzle-kit";
import { env } from "process";
export default defineConfig({
    dialect: "singlestore",
    schema: "./src/server/db/schema.ts",
    dbCredentials: {
        host: env.SINGLESTORE_HOST,
        user: env.SINGLESTORE_USER,
        password: env.SINGLESTORE_PASS,
        database: env.SINGLESTORE_DB_NAME,
        port: env.SINGLESTORE_PORT,
	ssl: {},
  maxIdle: 0, 
    },
});