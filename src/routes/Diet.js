const { Router } = require("express");
const { Diet } = require("../db");


const router = Router();

router.get("/", async (req, res) => {
  const diet = await Diet.findAll();
  res.send(diet);
});


module.exports = router;
