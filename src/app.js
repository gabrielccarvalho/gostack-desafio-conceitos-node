const express = require("express");
const cors = require("cors");

const { uuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (req, res) => {
  res.json(repositories);
});

app.post("/repositories", (req, res) => {
  const { title, url, techs } = req.body;

  const repository = {
    id: uuid(),
    title,
    url,
    techs,
    likes: 0,
  }

  repositories.push(repository);

  return res.json(repository);
});

app.put("/repositories/:id", (req, res) => {
  // TODO
});

app.delete("/repositories/:id", (req, res) => {
  const { id } = req.params;

  const findRepositoryIndex = repositories.findIndex(repository =>
    repository.id === id  
  );

  if (findRepositoryIndex >= 0) {
    repositories.splice(findRepositoryIndex, 1);
  }

  return res.status(204).send();
});

app.post("/repositories/:id/like", (req, res) => {
  // TODO
});

module.exports = app;
