const router = require("express").Router();
const Workouts = require("../models/workout.js");
// Dependencies
// =============================================================
var path = require("path");

// const mongojs = require("mongojs");
router.get("/api/workouts", (req, res) => {
  Workouts.find()
    .sort({ date: -1 })
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/", (req, res) => {

  Workouts.find()
    .sort({ date: -1 })
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
  console.log('workouts put' + JSON.stringify(req.body));
  Workouts.update({ _id: req.params.id }, { $push: { exercises: req.body } })
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/workouts/", (req, res) => {
  console.log(req.body)
  Workouts.create({ day: "07/29/2020", exercises: req.body })
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/exercise", (req, res) => {
  console.log('exercise');
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", (req, res) => {
  console.log('exercise');
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

router.get("/api/workouts/range", (req, res) => {
  Workouts.find()
    .sort({ day: -1 })
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
