require('dotenv').config();
const config = {
  username: process.env.DBUSER,
  password: process.env.DBPASS,
  host: process.env.DBHOST,
  dialect: process.env.DBDIALECT,
  database: process.env.DBNAME
}
<<<<<<< HEAD

=======
>>>>>>> 13dbb0db8d89406e59aaca767571ba1db13986eb

module.exports = config;