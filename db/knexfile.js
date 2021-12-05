// Update with your config settings.

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      host: 'localhost',
      database: 'assignment',
      user: 'postgres',
      password: 'postgres',
      port: 5432
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: './seeds',
    },
  },
};