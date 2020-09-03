const pgConnection =
  process.env.DATABASE_URL || "postgresql://localhost/marketplace";

module.exports = {
  development: {
    client: "pg",
    connection: "postgresql://localhost/marketplace",
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
    pool: {
      min: 2,
      max: 10,
    },
  },

  testing: {
    client: "pg",
    connection: "postgresql://localhost/marketplace_test",
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
    pool: {
      min: 2,
      max: 10,
    },

    production: {
      client: "pg",
      connection: pgConnection,
      useNullAsDefault: true,
      migrations: {
        directory: "./data/migrations",
      },
      seeds: {
        directory: "./data/seeds",
      },
      pool: {
        min: 2,
        max: 10,
      },
    },
  },
};
