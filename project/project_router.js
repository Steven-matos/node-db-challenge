const express = require("express");
const validateProject = require("../middleware/validateProject");
const validateResource = require("../middleware/validateResource");
const validateTask = require("../middleware/validateTask");

const Projects = require("./project_model");

const router = express.Router();

router.get("/", (req, res) => {
  Projects.getProjects()
    .then(projects => {
      res.json(projects);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        message: "Failed to retrieve Projects"
      });
    });
});

router.get("/resources", (req, res) => {
  Projects.getResources()
    .then(resources => {
      res.json(resources);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        message: "Failed to retrieve Resources!",
        error: err
      });
    });
});

router.get("/tasks", (req, res) => {
  Projects.getTasks()
    .then(tasks => {
      res.json(tasks);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        message: "Failed to retrieve Tasks",
        error: err
      });
    });
});

router.post("/", validateProject, (req, res) => {
  Projects.addProject(req.body)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        message: "Failed to save Project",
        error: err
      });
    });
});

router.post("/resources", validateResource, (req, res) => {
  Projects.addResource(req.body)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        message: "Failed to save Resource",
        error: err
      });
    });
});

router.post("/tasks", validateTask, (req, res) => {
  Projects.addTask(req.body)
    .then(task => {
      res.status(201).json(task);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        message: "Failed to save Task",
        error: err
      });
    });
});

module.exports = router;
