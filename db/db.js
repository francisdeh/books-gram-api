const knex = require("knex")
const knexFile = require("../knexfile")

// identify the environment
const environment = process.env.NODE_ENV || "development"
module.exports = knex(knexFile[environment])