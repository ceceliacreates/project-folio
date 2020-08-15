const express = require("express");

const app = express();
const PORT = process.env.PORT || 8085;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
  const tags = Array.isArray(req.query.tag) ? req.query.tag : [req.query.tag];

  const frontEndProjects = projects.filter(
    (project) => project.type === "front-end"
  );

  if (tags) {
    const taggedFrontEndProjects = applyTags(tags, frontEndProjects);

    res.json(taggedFrontEndProjects);
  } else {
    res.json(frontEndProjects);
  }
});

app.get("/api/projects/back-end/", function(req, res) {
  const tags = Array.isArray(req.query.tag) ? req.query.tag : [req.query.tag];
  const backEndProjects = projects.filter(
    (project) => project.type === "back-end"
  );

  if (tags) {
    const taggedBackEndProjects = applyTags(tags, backEndProjects);

    res.json(taggedBackEndProjects);
  } else {
    res.json(backEndProjects);
  }
});

app.get("/api/projects/full-stack/", function(req, res) {
  const tags = Array.isArray(req.query.tag) ? req.query.tag : [req.query.tag];
  const fullStackProjects = projects.filter(
    (project) => project.type === "full-stack"
  );

  if (tags) {
    const taggedFullStackProjects = applyTags(tags, fullStackProjects);

    res.json(taggedFullStackProjects);
  } else {
    res.json(fullStackProjects);
  }
});

app.listen(PORT, function() {
  console.log("Sever is listening at http://localhost:" + PORT);
});
