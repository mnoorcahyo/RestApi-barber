const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.send({
        message: "API Final Project"
    })
})

module.exports = router