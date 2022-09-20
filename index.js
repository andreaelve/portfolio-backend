const express = require('express');
const { getGithubToken } = require('./helpers/secrets');
const app = express();

app.get('/', async (req, res) => {
  const name = process.env.NAME || 'World';
  const token = await getGithubToken();
  res.send(`Hello ${token}!`);
});

const port = parseInt(process.env.PORT) || 8080;
app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
});