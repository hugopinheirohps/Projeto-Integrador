const multer = require("multer");

const path = require('path')

const multerDiskStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      const folder = path.join(__dirname, "../public/profileImg");
      cb(null, folder);
    },
    filename: (req, file, cb) => {
      const filename = Date.now() + path.extname(file.originalname);
      cb(null, filename);
    },
  });

  const uploadFile = multer({ storage: multerDiskStorage });

  module.exports = uploadFile;