export default ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env("DATABASE_HOST", "3.34.155.60"),
      port: env.int("DATABASE_PORT", 3306),
      database: env("DATABASE_NAME", "credot_database"),
      user: env("DATABASE_USERNAME", "sandburg"),
      password: env("DATABASE_PASSWORD", "sandburg123!"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
