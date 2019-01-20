const express = require("express");
const AuthCtrl = require("../controllers/authController");

const router = express.Router();
router.post('/register', AuthCtrl.createUser);

module.exports = router;
