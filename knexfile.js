const path = require('path')
require('dotenv').load()

module.exports = {

  development: {
    client: 'postgresql',
    connection: `postgres://localhost/${process.env.DATABASE_NAME}`,
    migrations: {
      directory: path.join(__dirname, 'database', 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'database', 'seeds')
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'day-worker-dev',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
        directory: path.join(__dirname, 'database', 'migrations')
      },
      seeds: {
        directory: path.join(__dirname, 'database', 'seeds')
      }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'day-worker-pro',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: path.join(__dirname, 'database', 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'database', 'seeds')
    }
  }

};
