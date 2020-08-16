const tags = require("../tags.json");
const projects = require("../projects.json");
const fs = require("fs");

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

async function updateProjects() {
  projects.forEach((project) => {
    const shuffledTags = shuffle(tags);

    project.tags = [shuffledTags[0], shuffledTags[1], shuffledTags[2]];
  });
}

async function saveToFile() {
  fs.writeFile("../projects.json", JSON.stringify(projects), (err) => {
    console.log("Tags added and file saved");
  });
}

updateProjects().then(() => saveToFile());
