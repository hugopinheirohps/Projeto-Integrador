const express = require('express');

const router = express.Router();

const path = require('path')

const multer = require('multer')
const usuarioController = require('../src/controller/usuarioController');

const multerDiskStorage = multer.diskStorage({
    destination:(req,file,cb) =>{
        const folder = path.join(__dirname,'../public/profileImg')
        cb(null,folder)
    },
    filename:(req,file,cb) =>{
        const filename = Date.now() + path.extname(file.originalname)
        cb(null,filename)
    }
})

const uploadFile = multer({storage:multerDiskStorage})



router.get('/login', usuarioController.login)
router.post('/login',usuarioController.salvarLogin)
router.post('/cadastro',uploadFile.single('avatar'),usuarioController.cadastrar)
    


module.exports = router;