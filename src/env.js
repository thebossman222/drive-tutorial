// filepath: /d:/VScode/drive-tutorial/src/env.js
import { z } from "zod";

const envSchema = z.object({
    SINGLESTORE_HOST: z.string(),
    SINGLESTORE_PORT: z.string(),
    SINGLESTORE_USER: z.string(),
    SINGLESTORE_PASS: z.string(),
    SINGLESTORE_DB_NAME: z.string(),
});

const env = envSchema.parse(process.env);

export { env };