const express = require("express")
const app = express()
const path = require("path")
app.get("/vote", (req, res) => {
    res.sendFile(path.join, "vote")
})