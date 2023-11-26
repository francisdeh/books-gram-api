const express = require('express');
const multer = require("multer")

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images')
  },
  filename: function (req, file, cb) {
    let ext = file.originalname.split(".")[1]
    cb(null, Date.now() + "." + ext)
  }
})

const file_upload = multer({ storage: storage })

const router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Books-Gram' });
});

router.post("/book-cover-image-upload", file_upload.single("book-cover-image"), (req, res) => {
  console.log(req.file)
  return res.render("image", { title: "Image Viewer", image_url: req.file.filename })
});

module.exports = router;
