const driveAPI = require('./driveAPI.js');

const path = require('path');
const express = require("express");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/login", (req, res) => {
  driveAPI.setCredentials(req.query.access_token);
  res.json({
    message: "/login requets handled!"
  });
});
  
app.get("/save", async (req, res) => {
    const status = await driveAPI.save(req.query.data);
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

