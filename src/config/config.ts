import dotenv from "dotenv";

// Load environment variables from .env
dotenv.config();

export function config() {
  return {
    port: process.env.PORT ? Number(process.env.PORT) : 5000,
    env: process.env.NODE_ENV || "development",

    // PostgreSQL config
    dbUser: process.env.DB_USER || "postgres",
    dbPassword: process.env.DB_PASSWORD || "Ciumbe@254",
    dbHost: process.env.DB_HOST || "localhost",
    dbPort: process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432,
    dbName: process.env.DB_NAME || "cfg_db",

    // JWT secret
    jwtSecret: process.env.JWT_SECRET || "your_default_secret",

    // Email Config
    emailUser: process.env.EMAIL_USER,
    emailPass: process.env.EMAIL_PASS,
  };
}
