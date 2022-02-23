const driveAPI = require('./driveAPI.js');

const path = require('path');
const express = require("express");
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.get("/login", (req, res) => {
  driveAPI.setCredentials(req.get("accessToken"));
  res.json({
    message: "/login requets handled!"
  });
});
  
app.post("/save", async (req, res) => {
    const status = await driveAPI.save(req.body);
    res.json({ 
      status: status, 
      message: "/save request handled!" 
    });
});

app.get("/get", async (req, res) => {
  var data = null;
  const files = await driveAPI.listSaveFile();
  if (files.length > 0) {
    data = await driveAPI.getUserData(files[0].id);
  } 
  res.json({ 
    userData: data, 
    message: "/get request handled!" 
  });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  console.log("request not handled!");
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

