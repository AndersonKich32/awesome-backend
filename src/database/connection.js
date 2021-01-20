const knex = require('knex')

const configurations = require('../../knexfile')
knex.migrate.latest([configurations])
const connection = knex(configurations.development);

module.exports = connection;