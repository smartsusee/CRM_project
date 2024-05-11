const express = require("express");
const { Post_data } = require("./Crud");

const router = express.Router();

router.post("/create", Post_data);

module.exports = router;
