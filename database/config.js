require('dotenv').config();
const config = {
  username: process.env.DBUSER,
  password: process.env.DBPASS,
  host: process.env.DBHOST,
  dialect: process.env.DBDIALECT,
  database: process.env.DBNAME
}

module.exports = config;