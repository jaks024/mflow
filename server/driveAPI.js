const path = require('path');
const { google } = require('googleapis');
const fs = require('fs');

const CLIENT_ID = '91993730445-4jjm5pf1kvja9m8r6b66uarvnqmdir1b.apps.googleusercontent.com'
const CLIENT_SECRET = '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';

const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = '1//04-nJEhEmG1OMCgYIARAAGAQSNwF-L9IrwQ23bXo09gdZE-kZdpy0no3ejtHCcPhJi4vb4Q_pLEBHO0sa7xRB7HA8wCQHNd6amPM';

const SAVE_FILE_NAME = 'mflow_user_data.json';

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

exports.create = async function createFolder(name) {
  try{
    const listResponse = await drive.files.list({
        q: `mimeType='application/vnd.google-apps.folder' and name='${name}' and trashed=false`
    });
    console.log(listResponse.data);

    if (listResponse.data.files.length === 0) {
      var fileMetadata = {
        'name' : name,
        'mimeType' : 'application/vnd.google-apps.folder'
      }
      const response = await drive.files.create({
            resource: fileMetadata,
            fields: 'id'
      });  
        // report the response from the request
      console.log(response.data);
      return response.data.id;
    } else {
      return listResponse.data.files[0].id;
    }
  }catch (error) {
      //report the error message
      console.log(error.message);
      return null;
  }
}

exports.save = async function saveData(data) {
  try{
    const listResponse = await drive.files.list({
      spaces: 'appDataFolder',
      q: `name='${SAVE_FILE_NAME}'`,
    });  
    console.log("in folder listings");
    console.log(listResponse.data);
    if (listResponse.data.files.length === 0) {
      var fileMetadata = {
        'name' : `${SAVE_FILE_NAME}`,
        'parents' : ['appDataFolder']
      }
      var media = {
        mimeType: 'application/json',
        body: data
      }
      const response = await drive.files.create({
        resource: fileMetadata,
        media: media,
        fields: 'id, name'
      });  
      // report the response from the request
      console.log("creat new");
      console.log(response.data);
    } else {
      const response = await drive.files.update({
        fileId: listResponse.data.files[0].id,
        media: {
          body: data
        },
      })
      console.log("update");
      console.log(response.data);
    }
  }catch (error) {
      //report the error message
      console.log(error.message);
  }
}  

exports.getUserData = async function get(fileId) {
  try{
    var download;
    const response = await drive.files.get({
      fileId: fileId,
      alt: 'media',
    }, {
      responseType: 'stream'
    }, (err, res) => {
      res.data
      .on('end', () => {
        console.log("data end");
      })
      .on('error', err => {
        console.log('Error', err);
      })
      .pipe(download);
    });  
    console.log("in get");
    console.log(response.data);
    console.log(download);
  }catch (error) {
      //report the error message
      console.log(error.message);
  }
}

exports.load = async function loadData() {
  try{
    const response = await drive.files.list({
        q: `name='${SAVE_FILE_NAME}' and trashed=false and mimeType='text/plain'`,
      });  
      // report the response from the request
      console.log(response.data);
  }catch (error) {
      //report the error message
      console.log(error.message);
  }
}
