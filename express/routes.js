const router = require("express").Router();
const multer = require("multer");
const upload = multer({ dest: "uploads" });
const fs = require("fs");
const path = require("path");

router.get("/", (req, res, next) => {
  const { page, total } = req.query;
  res.send({
    status: "success",
    message: "Welcome to my API",
    page: page,
    total: total,
  });
});

router.post("/product", upload.single("image"), (req, res) => {
  const { name, price, stock, status } = req.body;
  const image = req.file;
  if (!image) {
    return res.status(400).json({
      status: "error",
      message: "Image is required",
    });
  }
  if (image) {
    const targetPath = path.join(__dirname, "uploads", image.originalname);
    fs.renameSync(image.path, targetPath);
  }
  const newProduct = {
    name,
    price,
    stock,
    status,
    image,
  };

  res.json(newProduct);
});

router.get("/:category/:tag", (req, res) => {
  const { category, tag } = req.params;
  res.json({
    category,
    tag,
  });
});

module.exports = router;
