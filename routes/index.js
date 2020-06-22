var express = require('express');
var router = express.Router();
const upload = require("../utils/upload")
const {loadOriginals, saveOriginals} = require("../utils/data")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello' });
});

router.post("/original", (req, res, next) => {
  // console.log(req.body)
  upload(req, res, function(err){
    if(err){
      return res.render("index", {error: err.message})
    }
    if(!req.file){
      return res.send("index", {error: "Can not upload"})
    }
    // console.log(req.file.filename)
    const originals = loadOriginals()
    // console.log(originals)
    console.log(req.file)
    // console.log("ORIGINALSSSS",originals)
    req.file.id = originals.length === 0 ? 1 : originals[originals.length -1].id +1
    originals.push(req.file)
    saveOriginals(originals)
    res.render("original", {images: originals, path: "/images/originals/"})
  })
})
module.exports = router;
