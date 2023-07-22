const express = require("express");
const path = require("path");
const app = express();
const router = express.Router();

const mainController = require("../controllers/mainController");

router.get('/', mainController.index);

module.exports = router;