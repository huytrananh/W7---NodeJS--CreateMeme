const multer = require('multer') // need to install multer
const path = require('path')

const pathToOriginal = path.join(__dirname,'../public/images/originals')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, pathToOriginal)
    },
    filename: function (req, file, cb) {
        console.log(file)
        const allows = ["image/jpeg", "image/gif", "image/png"]
        if(!allows.includes(file.mimetype)){
            return cb(new Error("file not allowed", undefined))
        }
        cb(null, Date.now() + '-' + file.originalname  ) // unix timestamp
    }
  })
   
  var upload = multer({ storage: storage })

  module.exports = upload.single("fileupload")