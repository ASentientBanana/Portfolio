const express = require("express");
const projectJson = require("./projects.json");
const app = express();
const port = 3333;
const path = require("path");
const cors = require("cors");

/*
get projects
*/
const projectNameToImageName = (name) => name.replace(" ", "-");
app.use(cors());
app.use("/static", express.static(path.join(__dirname, "public")));

app.get("api/remove/", (req, res) => {
  res.send("hi");
});

app.get("/api/projects", (req, res) => {
  res.send(projectJson);
});

//-post
app.post("/api/project/add", (req, res) => {
  console.log(req.body);
});
app.post("/api/login", (req, res) => {
  console.log(req.statusCode);
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

//   id =
//   name =
//   description =
//   tech =
//   git =
//   image =
//   live =
//   created =
//   updated =
