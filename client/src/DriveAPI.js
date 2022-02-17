import React from 'react';

class DriveAPI extends React.Component {

  // Client ID and API key from the Developer Console
   CLIENT_ID = '91993730445-4jjm5pf1kvja9m8r6b66uarvnqmdir1b.apps.googleusercontent.com';
   API_KEY = 'AIzaSyBfYrFKFlaOgF3gI_s2N1iBPz0oxDAaD_g';

  // Array of API discovery doc URLs for APIs used by the quickstart
   DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];

  // Authorization scopes required by the API; multiple scopes can be
  // included, separated by spaces.
   SCOPES = 'https://www.googleapis.com/auth/drive.metadata.readonly';

   authorizeButton = document.getElementById('authorize_button');
   signoutButton = document.getElementById('signout_button');

  /**
   *  On load, called to load the auth2 library and API client library.
   */
   handleClientLoad() {
    gapi.load('client:auth2', initClient);
  }

  /**
   *  Initializes the API client library and sets up sign-in state
   *  listeners.
   */
   initClient() {
    gapi.client.init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES
    }).then(function () {
      // Listen for sign-in state changes.
      gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

      // Handle the initial sign-in state.
      updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
      authorizeButton.onclick = handleAuthClick;
      signoutButton.onclick = handleSignoutClick;
    }, function(error) {
      appendPre(JSON.stringify(error, null, 2));
    });
  }

  /**
   *  Called when the signed in status changes, to update the UI
   *  appropriately. After a sign-in, the API is called.
   */
   updateSigninStatus(isSignedIn) {
    if (isSignedIn) {
      authorizeButton.style.display = 'none';
      signoutButton.style.display = 'block';
      listFiles();
    } else {
      authorizeButton.style.display = 'block';
      signoutButton.style.display = 'none';
    }
  }

  /**
   *  Sign in the user upon button click.
   */
   handleAuthClick(event) {
    gapi.auth2.getAuthInstance().signIn();
  }

  /**
   *  Sign out the user upon button click.
   */
   handleSignoutClick(event) {
    gapi.auth2.getAuthInstance().signOut();
  }

  /**
   * Append a pre element to the body containing the given message
   * as its text node. Used to display the results of the API call.
   *
   * @param {string} message Text to be placed in pre element.
   */
   appendPre(message) {
    var pre = document.getElementById('content');
    var textContent = document.createTextNode(message + '\n');
    pre.appendChild(textContent);
  }

  /**
   * Print files.
   */
   listFiles() {
    gapi.client.drive.files.list({
      'pageSize': 10,
      'fields': "nextPageToken, files(id, name)"
    }).then(function(response) {
      appendPre('Files:');
      var files = response.result.files;
      if (files && files.length > 0) {
        for (var i = 0; i < files.length; i++) {
          var file = files[i];
          appendPre(file.name + ' (' + file.id + ')');
        }
      } else {
        appendPre('No files found.');
      }
    });
  }


    render() {
        this.initClient();
        return (
        <div>
            <p>Drive API Quickstart</p>
            <button id="authorize_button" style="display: none;">Authorize</button>
            <button id="signout_button" style="display: none;">Sign Out</button>

            <pre id="content" style="white-space: pre-wrap;"></pre>

            <script async defer src="https://apis.google.com/js/api.js"
                onload="this.onload=function(){};handleClientLoad()"
                onreadystatechange="if (this.readyState === 'complete') this.onload()">
            </script>
        </div>
        )

    }
}

export default DriveAPI;