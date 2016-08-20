module.exports = {
  client: 'postgres',
  connection: {
    host: 'postgres',
    user: 'postgres',
    password: 'heyman',
    database: 'dockertest',
    charset: 'utf8',
  },
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
};