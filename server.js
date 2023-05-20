const express = require('express');
const { google } = require('googleapis');
const path = require('path');

const app = express();
const port = 3000;

const clientID = '1052657757748-0sji1163l69bsegqql4sskuvc0af29g2.apps.googleusercontent.com';
const clientSecret = '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';
const redirectURI = 'http://localhost:3000/auth/callback';

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/auth/callback', async (req, res) => {
  const code = req.query.code;
  const oauth2Client = new google.auth.OAuth2(clientID, clientSecret, redirectURI);
  const tokens = await oauth2Client.getToken(code);
  oauth2Client.setCredentials(tokens.tokens);

  const userInfo = await getGoogleUserInfo(oauth2Client);
  res.redirect(`/user.html?name=${encodeURIComponent(userInfo.name)}&picture=${encodeURIComponent(userInfo.picture)}`);
});

function getAuthUrl() {
  const oauth2Client = new google.auth.OAuth2(clientID, clientSecret, redirectURI);
  const scopes = [
    'https://www.googleapis.com/auth/userinfo.profile',
    'https://www.googleapis.com/auth/userinfo.email',
  ];
  const url = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: scopes,
  });
  return url.replace('redirect_uri=http://localhost:3000/auth/callback', `redirect_uri=${redirectURI}`);
}

async function getGoogleUserInfo(oauth2Client) {
  const oauth2 = google.oauth2({ version: 'v2', auth: oauth2Client });
  const { data } = await oauth2.userinfo.get();
  return data;
}

app.get('/auth/login', (req, res) => {
  const authUrl = getAuthUrl();
  res.redirect(authUrl);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
