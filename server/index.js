const driveAPI = require('./driveAPI.js');

const path = require('path');
const express = require("express");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/login", (req, res) => {
  console.log("login request handled");
  console.log(req.query.access_token);
  driveAPI.setCredentials(req.query.access_token);
    res.json({ message: "logged in!" });
  });
  
app.get("/save", async (req, res) => {
  console.log("save request handled");
  //await driveAPI.create('MFlow Data')
  driveAPI.save(req.query.data);
    res.json({ message: "saved!" });
});

app.get("/get", async (req, res) => {
  console.log("get request handled");
  driveAPI.getUserData(req.query.fileId);
    res.json({ message: "get!" });
});

app.get("/load", (req, res) => {
  console.log("load request handled");
  driveAPI.load();
    res.json({ message: "loaded!" });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  console.log("get request not handled");
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

