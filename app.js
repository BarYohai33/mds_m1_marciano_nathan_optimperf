const express = require("express");
const bodyParser = require("body-parser");
const taskController = require("./controllers/TaskController");
const mongoose = require("mongoose");
const dbURI = process.env.URL
require("./models/Task");
const options = {
  reconnectTries: Number.MAX_VALUE,
  useNewUrlParser: true,
  poolSize: 10
};

const app = express();
const port = process.env.PORT || 3301;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let dbConnected = false

app.use(async (req, res, next) => {
  if (!dbConnected) {
    await mongoose
      .connect(dbURI, options)
      .then(() => console.log('connected') || (dbConnected = true))
      .catch((e) => console.log('not connected', e) || (dbConnected = false))
  }

  if (!dbConnected) {
    res.status(503).json({
      message: 'Something went wrong'
    })
    return
  }
  next();
})

app
  .route("/tasks")
  .get(taskController.listAllTasks)
  .post(taskController.createNewTask);

app
  .route("/tasks/:taskid")
  .get(taskController.readTask)
  .put(taskController.updateTask)
  .delete(taskController.deleteTask);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});