const express = require("express");
const db = require('dotenv').config()
const fs = require('fs')
const projectJson = require("./projects.json");
const app = express();
const port = 3333;
const path = require("path");
const cors = require("cors");
const mailer = require('nodemailer')



const projectNameToImageName = (name) => name.replace(" ", "-");
app.use(cors());
app.use("/static", express.static(path.join(__dirname, "public")));

let transporter = mailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAILUSER, // generated ethereal user
    pass: process.env.EMAIL_PASSWRD, // generated ethereal password
  },
});

// app.get("api/remove/", (req, res) => {
//   res.send("hi");
// });

app.get("/api/test", (req, res) => {
  res.send("<h1>IM ALIVE</h1>")
});


app.get("/api/projects", (req, res) => {
  console.log('getting proj');
  res.send(projectJson);
});

//-post
// app.post("/api/project/add", (req, res) => {
//   console.log(req.body);
// });
// app.post("/api/login", (req, res) => {
//   console.log(req.statusCode);
//   res.sendStatus(200);
// });

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
