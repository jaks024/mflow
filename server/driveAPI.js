const path = require('path');
const { google } = require('googleapis');
const fs = require('fs');

const CLIENT_ID = '91993730445-4jjm5pf1kvja9m8r6b66uarvnqmdir1b.apps.googleusercontent.com'
const CLIENT_SECRET = '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';

const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = '1//04-nJEhEmG1OMCgYIARAAGAQSNwF-L9IrwQ23bXo09gdZE-kZdpy0no3ejtHCcPhJi4vb4Q_pLEBHO0sa7xRB7HA8wCQHNd6amPM';

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

// const ACCESS_TOKEN =  "ya29.A0ARrdaM9KewYTgp2f6xmqr2_84M2dYd8DmD_zVu1ZcdNWxLBr9uoz_zgMe1ww39MNyFJMgMX8vIKj_pT-y-EcF7yEc4sawGA0IZKUX76TbXrUXJvkj2_itfBcezFRSKVUpTmKglD_a10IJwMipFpprHMBeSe1";

// oauth2Client.setCredentials({ access_token: ACCESS_TOKEN});

// oauth2Client.on('tokens', (tokens) => {
//   if (tokens.refresh_token) {
//     // store the refresh_token in my database!
//     console.log("store token");
//     console.log(tokens.refresh_token);
//   }
//   console.log("access token");
//   console.log(tokens.access_token);
// });

const drive = google.drive( {
  version: 'v3',
  auth: oauth2Client
});

const filePath = path.join('E:\\GitHub\\drawing-stuff\\contests\\exported', 'osu winter contest 21.png');

exports.setCredentials = function setCredentials(accessToken) {
  oauth2Client.setCredentials({ access_token: accessToken});
  oauth2Client.on('tokens', (tokens) => {
    if (tokens.refresh_token) {
      // store the refresh_token in my database!
      console.log("store token");
      console.log(tokens.refresh_token);
    }
    console.log("access token");
    console.log(tokens.access_token);
  });
}

exports.save = async function saveData(data) {
  try{
    const response = await drive.files.create({
          requestBody: {
            parents: "mflow",
              name: 'mflow_user_data.json', //file name
              mimeType: 'text/plain',
          },
          media: {
              mimeType: 'text/plain',
              body: data,
          },
      });  
      // report the response from the request
      console.log(response.data);
  }catch (error) {
      //report the error message
      console.log(error.message);
  }
}  

exports.load = async function loadData() {
  try{
    const response = await drive.files.list({
        q: "name='mflow_user_data.json'",
      });  
      // report the response from the request
      console.log(response.data);
  }catch (error) {
      //report the error message
      console.log(error.message);
  }
}
