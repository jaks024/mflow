const { google } = require('googleapis');
const fs = require('fs');

const CLIENT_ID = '91993730445-4jjm5pf1kvja9m8r6b66uarvnqmdir1b.apps.googleusercontent.com'
const CLIENT_SECRET = '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';

const REDIRECT_URI = 'https://developers.google.com/oauthplayground';

const SAVE_FILE_NAME = 'mflow_user_data.json';

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

const drive = google.drive( {
  version: 'v3',
  auth: oauth2Client
});

exports.setCredentials = function setCredentials(accessToken) {
  oauth2Client.setCredentials({ access_token: accessToken });
  oauth2Client.on('tokens', (tokens) => {
    // if (tokens.refresh_token) {
    //   console.log("store token");
    //   console.log(tokens.refresh_token);
    // }
    oauth2Client.setCredentials({ access_token: tokens.access_token });
  });
}

exports.create = async function createFolder(name) {
  try{
    const listResponse = await drive.files.list({
        q: `mimeType='application/vnd.google-apps.folder' and name='${name}' and trashed=false`
    });

    if (listResponse.data.files.length === 0) {
      var fileMetadata = {
        'name' : name,
        'mimeType' : 'application/vnd.google-apps.folder'
      };
      const response = await drive.files.create({
            resource: fileMetadata,
            fields: 'id'
      });  
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
    if (listResponse.data.files.length === 0) {
      var fileMetadata = {
        'name' : `${SAVE_FILE_NAME}`,
        'parents' : ['appDataFolder']
      };
      var media = {
        mimeType: 'application/json',
        body: data
      };
      drive.files.create({
        resource: fileMetadata,
        media: media,
        fields: 'id, name'
      });  
    } else {
      drive.files.update({
        fileId: listResponse.data.files[0].id,
        media: {
          body: data
        },
      })
    }
    return true;
  }catch (error) {
      console.log(error.message);
      return false;
  }
}  

exports.getUserData = async function get(fileId) {
  try{
    const response = await drive.files.get({
      fileId: fileId,
      alt: 'media',
    });
    return response.data;
  }catch (error) {
      console.log(error.message);
      return null;
  }
}

exports.listSaveFile = async function listSaveFile() {
  try{
    const response = await drive.files.list({
        q: `name='${SAVE_FILE_NAME}'`,
        spaces: 'appDataFolder',
      });  
      return response.data.files;     
  }catch (error) {
      console.log(error.message);
      return null;
  }
}
