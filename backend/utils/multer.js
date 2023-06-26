import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images");
 
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now().toString();
    cb(null, uniqueSuffix + "_" + file.originalname);
  },
});
const filterImage = multer({ storage: storage }).single("photo");
export default filterImage;
