const express = require("express")
const routes = express.Router()

const profile =
{
    name: "Marcos",
    avatar: "https://avatars.githubusercontent.com/u/79537800?v=4",
    monthlyBudget: 3000,
    hoursPerDay: 7,
    daysPerWeek: 5,
    vacationPerYear: 4
}

const views = __dirname + "/views/"

routes.get("/", (request, res) => res.render(views + "index"))
routes.get("/job", (request, res) => res.render(views + "job"))
routes.get("/job/edit", (request, res) => res.render(views + "job-edit"))
routes.get("/profile", (request, res) => res.render(views + "profile", { profile }))

module.exports = routes