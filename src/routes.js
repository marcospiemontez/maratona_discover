const express = require("express");
const routes = express.Router();

const profile = {
  name: "Marcos",
  avatar: "https://github.com/marcospiemontez.png",
  monthlyBudget: 3000,
  hoursPerDay: 7,
  daysPerWeek: 5,
  vacationPerYear: 4,
};

const jobs = [
  {
    id: 1,
    name: "Pizzaria",
    dailyHours: 2,
    totalHours: 60,
    createdAt: Date.now(),
  },
  {
    id: 2,
    name: "Panificadora",
    dailyHours: 3,
    totalHours: 46,
    createdAt: Date.now(),
  },
];

const views = __dirname + "/views/";

function remainingDays(job) {
  // calculo de tempo restante
  const remainingDays = (jobs.totalHours) / (jobs.dailyHours).toFixed()

  const createdDate = new Date(jobs.createdAt)
  const dueDay = createdDate.getDate() + Number(remainingDays)
  const dueDateInMs = createdDate.setDate(dueDay)

  const timeDiffInMs = dueDateInMs - Date.now()
  
  // transformar milissegundos em dias
  const dayInMs = 1000 * 60 * 60 * 24
  const dayDiff = Math.floor(timeDiffInMs / dayInMs)

  // restam x dias
  return dayDiff
}

routes.get("/", (req, res) => {
  const updatedJobs = jobs.map((job) => {
    const remaining = remainingDays(job)
    const status = remaining <= 0 ? 'Done' : 'Progress'
    return {
      ...job,
      remaining,
      status
    }
  })

  return res.render(views + "index", { jobs });
});

routes.get("/job", (req, res) => res.render(views + "job"));

routes.post("/job", (req, res) => {
  const lastId = jobs[jobs.length - 1]?.id || 1;

  jobs.push({
    id: lastId + 1,
    name: req.body.name,
    dailyHours: req.body.dailyHours,
    totalHours: req.body.totalHours,
    createdAt: Date.now(),
  });
  return res.redirect("/");
});

routes.get("/job/edit", (req, res) => res.render(views + "job-edit"));

routes.get("/profile", (req, res) =>
  res.render(views + "profile", { profile })
);

module.exports = routes;
