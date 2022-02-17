const path = require('path');
const express = require("express");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/api", (req, res) => {
    res.json({ message: "Hello!" });
  });
  
// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(process.env.CLIENT_ID)

app.post("/api/v1/auth/google", async (req, res) => {
  const { token }  = req.body
  const ticket = await client.verifyIdToken({
      idToken: token,
      audience: '91993730445-4jjm5pf1kvja9m8r6b66uarvnqmdir1b.apps.googleusercontent.com'
  });
  const { name, email, picture } = ticket.getPayload();    
  const user = await db.user.upsert({ 
      where: { email: email },
      update: { name, picture },
      create: { name, email, picture }
  })
  res.status(201)
  res.json(user)
})
