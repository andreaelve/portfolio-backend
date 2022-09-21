const express = require('express');
const { Octokit } = require('octokit');
const { getGithubToken } = require('./helpers/secrets');
const app = express();
var cors = require('cors')

app.use(cors())

app.get('/github', async (req, res) => {
//   const name = process.env.NAME || 'World';
    const token = await getGithubToken();

    const octokit = new Octokit({
    auth: token
    });

    const githubRepos = await octokit.request('GET /users/{username}/repos', {
        username: 'andreaelve'
    })

    res.send(githubRepos);
});

const port = parseInt(process.env.PORT) || 8080;
app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
});