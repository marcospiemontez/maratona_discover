const express = require("express")
const routes = express.Router()

const profile = {
    name: "Marcos",
    avatar: "https://github.com/marcospiemontez.png",
    monthlyBudget: 3000,
    hoursPerDay: 7,
    daysPerWeek: 5,
    vacationPerYear: 4
}

const views = __dirname + "/views/"

routes.get("/", (req, res) => res.render(views + "index"))
routes.get("/job", (req, res) => res.render(views + "job"))
routes.get("/job/edit", (req, res) => res.render(views + "job-edit"))
routes.get("/profile", (req, res) => res.render(views + "profile", { profile }))

module.exports = routes