const db = require("../data/db-config");

module.exports = {
  addResource,
  getResources,
  addProject,
  getProjects,
  addTask,
  getTasks
};

function addResource(resource) {
  return db("resources").insert(resource, "id");
}

function getResources() {
  return db("resources");
}

function addProject(project) {
  return db("projects").insert(project, "id");
}

function getProjects() {
  return db("projects");
}

function addTask(task) {
  return db("task").insert(task, "id");
}

function getTasks() {
  return db("task as t")
    .join("projects as p", "t.project_id", "p.id")
    .select("p.name", "p.desc", "t");
}
