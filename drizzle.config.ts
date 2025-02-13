// filepath: /d:/VScode/drive-tutorial/drizzle.config.ts
import { defineConfig } from "drizzle-kit";
import { env } from "./src/env";

export default defineConfig({
    dialect: "singlestore",
    schema: "./src/server/db/schema.ts",
    dbCredentials: {
        host: env.SINGLESTORE_HOST,
        user: env.SINGLESTORE_USER,
        password: env.SINGLESTORE_PASS,
        port: env.SINGLESTORE_PORT,
        database: env.SINGLESTORE_DB_NAME,
        ssl: {},
    },
});