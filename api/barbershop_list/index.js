const express = require ('express')
const router = express.Router()
const controller = require("./controller")


router.get("/", controller.get)
router.get("/:barber_id", controller.getById)
router.post("/", controller.post)


module.exports = router