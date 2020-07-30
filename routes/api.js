const router = require("express").Router();
const db = require("../models");
// Dependencies
// =============================================================
var path = require("path");

// const mongojs = require("mongojs");
router.get("/api/workouts", (req, res) => {
  db.Workout.find()
    .sort({ date: -1 })
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/", (req, res) => {

  db.Workout.find()
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
  db.Workout.update({ _id: req.params.id }, { $push: { exercises: req.body } })
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/workouts/", (req, res) => {
  console.log(req.body)
  db.Workout.create({ day: "07/29/2020", exercises: req.body })
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
  db.Workout.find()
    .sort({ day: -1 })
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
