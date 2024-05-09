const router = require("express").Router();
const multer = require("multer");
const upload = multer({ dest: "/uploads" });

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
  const image = req.file ? req.file.path : null;
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
