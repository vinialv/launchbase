const { Pool } = require("pg")
require('dotenv').config()

module.exports = new Pool({
    user: process.env.USER_LOCAL,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    port: process.env.PORT,
    database: process.env.DATABASE
})