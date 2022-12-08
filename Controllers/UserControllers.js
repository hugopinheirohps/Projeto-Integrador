const {Usuario} = require('../models')

async function UserController(){
    index: async (req, res) => {
        let users = await Usuario.findAll()
        console.log(users);
    }
}

module.exports = UserController;