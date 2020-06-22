var express = require('express');
var router = express.Router();
const upload = require("../utils/upload")
const {loadOriginals} = require("../utils/data")
const path = require('path')

/* GET home page. */
router.get('/', function(req, res, next) {
    let loadImage = loadOriginals() 
    res.render('meme', { images: loadImage, path: '../images/meme/' });
});


module.exports = router;
