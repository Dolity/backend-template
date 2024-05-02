const express = require("express")
const router = express.Router()

const userAuthController = require("../../controllers/user/userAuthController")

router.get("/status", userAuthController.status)
router.post("/register", userAuthController.store)

module.exports = router
