const express = require('express')
const multer = require("multer")

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads')
  },
  filename: function (req, file, cb) {
    let ext = file.mimetype.split("/")[1]
    cb(null, `${file.fieldname}-${Date.now()}.${ext}`)
  }
})

const file_upload = multer({ storage: storage, limits: { fileSize: 1000000}, fileFilter: function(req, file, cb) {
  let allowed_mime_types = [
    "image/png",
    "image/jpeg",
    "image/jpeg",
  ]
  if(!allowed_mime_types.includes(file.mimetype)) {
     cb(new Error(`File is invalid. The file you uploaded is ${file.mimetype}.`))
  }  
},  
})


const router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Books-Gram' });
});

router.post("/book-cover-image-upload", file_upload.single("book-cover-image"), (req, res, next) => {
  return res.render("image", { title: "Upload Viewer", image_url: req.file.filename })
});

module.exports = router;
