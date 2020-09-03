const pgConnection =
  process.env.DATABASE_URL || "postgresql://postgres@localhost/marketplace";

module.exports = {
  development: {
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
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys=ON", done);
      },
    },
  },

  testing: {
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
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys=ON", done);
      },
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
        afterCreate: (conn, done) => {
          conn.run("PRAGMA foreign_keys=ON", done);
        },
      },
    },
  },
};
