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

const jobs = [
    {
        id: 1,
        name: "Pizzaria",
        dailyHours: 2,
        totalHours: 60,
        createdAt: Date.now()
    },
    {
        id: 2,
        name: "Panificadora",
        dailyHours: 3,
        totalHours: 46,
        createdAt: Date.now()
    }
]

const views = __dirname + "/views/"

routes.get("/", (req, res) => res.render(views + "index", { jobs }))

routes.get("/job", (req, res) => res.render(views + "job"))

routes.post("/job", (req, res) => {
    const lastId = jobs[jobs.length - 1]?.id || 1;
    
    jobs.push({
        id: lastId + 1,
        name: req.body.name,
        dailyHours: req.body.dailyHours,
        totalHours: req.body.totalHours,
        createdAt: Date.now()
    })
    return res.redirect('/')
})

routes.get("/job/edit", (req, res) => res.render(views + "job-edit"))

routes.get("/profile", (req, res) => res.render(views + "profile", { profile }))

module.exports = routes