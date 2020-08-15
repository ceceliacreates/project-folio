const express = require("express");

const app = express();
const PORT = process.env.PORT || 8085;

const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const projects = require("./projects.json");

function applyTags(tags, projects) {
  const taggedProjects = [];

  tags.forEach((tag) => {
    taggedProjects.push(
      projects.filter((project) => project.tags.includes(tag))
    );
  });

  return taggedProjects;
}

app.get("/api/projects", function(req, res) {
  res.json(projects);
});

app.get("/api/projects/front-end", function(req, res) {
  const tags = req.query.tag
    ? Array.isArray(req.query.tag)
      ? req.query.tag
      : [req.query.tag]
    : null;

  const frontEndProjects = projects.filter(
    (project) => project.type === "front-end"
  );

  if (tags !== null) {
    const taggedFrontEndProjects = applyTags(tags, frontEndProjects);

    res.json(taggedFrontEndProjects);
  } else {
    res.json(frontEndProjects);
  }
});

app.get("/api/projects/back-end", function(req, res) {
  const tags = req.query.tag
    ? Array.isArray(req.query.tag)
      ? req.query.tag
      : [req.query.tag]
    : null;
  const backEndProjects = projects.filter(
    (project) => project.type === "back-end"
  );

  if (tags !== null) {
    const taggedBackEndProjects = applyTags(tags, backEndProjects);

    res.json(taggedBackEndProjects);
  } else {
    res.json(backEndProjects);
  }
});

app.get("/api/projects/full-stack", function(req, res) {
  const tags = req.query.tag
    ? Array.isArray(req.query.tag)
      ? req.query.tag
      : [req.query.tag]
    : null;
  const fullStackProjects = projects.filter(
    (project) => project.type === "full-stack"
  );

  if (tags !== null) {
    const taggedFullStackProjects = applyTags(tags, fullStackProjects);

    res.json(taggedFullStackProjects);
  } else {
    res.json(fullStackProjects);
  }
});

app.listen(PORT, function() {
  console.log("Sever is listening at http://localhost:" + PORT);
});
