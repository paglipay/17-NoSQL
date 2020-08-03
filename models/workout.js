const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      name: {
        type: String,
      },
      type: {
        type: String
      },
      weight: {
        type: Number
      },
      sets: {
        type: Number
      },
      reps: {
        type: Number
      },
      distance: {
        type: Number
      },
      duration: {
        type: Number
      }
    }]
},
  {
    toJSON: {
      virtuals: true
    }
  });
  // adds a dynamically-created property to schema
  WorkoutSchema.virtual("totalDuration").get(function () {
    // "reduce" array of exercises down to just the sum of their durations
    return this.exercises.reduce(function (total, exercise) {
      return total + exercise.duration;
    }, 0);
  });
  // adds a dynamically-created property to schema
  WorkoutSchema.virtual("totalWeight").get(function () {
    // "reduce" array of exercises down to just the sum of their durations
    return this.exercises.reduce(function (total, exercise) {
      return total + exercise.weight;
    }, 0);
  });
  // adds a dynamically-created property to schema
  WorkoutSchema.virtual("totalSets").get(function () {
    // "reduce" array of exercises down to just the sum of their durations
    return this.exercises.reduce(function (total, exercise) {
      return total + exercise.sets;
    }, 0);
  });
  // adds a dynamically-created property to schema
  WorkoutSchema.virtual("totalReps").get(function () {
    // "reduce" array of exercises down to just the sum of their durations
    return this.exercises.reduce(function (total, exercise) {
      return total + exercise.reps;
    }, 0);
  });


const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
