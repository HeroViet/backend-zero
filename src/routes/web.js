const express = require("express");
const {
  getHomepage,
  getABC,
  postCreateUser,
} = require("../controllers/homeController");
const router = express.Router();

//Khai bao route
router.get("/", getHomepage);
router.get("/abc", getABC);

router.post("/create-user", postCreateUser);

module.exports = router;
