import { Resource } from "sst";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  // Pick up all our schema files
  schema: ["./src/**/*.sql.ts"],
  out: "./migrations",
  dbCredentials: {
    host: Resource.Rds.host,
    port: Resource.Rds.port,
    user: Resource.Rds.username,
    password: Resource.Rds.password,
    database: Resource.Rds.database,
  },
});
