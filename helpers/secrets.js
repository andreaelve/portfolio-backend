
// Imports the Secret Manager library
const {SecretManagerServiceClient} = require('@google-cloud/secret-manager');

// Instantiates a client
const client = new SecretManagerServiceClient();

async function getGithubToken() {
    const name = 'projects/848340075575/secrets/test/versions/latest';
    const [version] = await client.accessSecretVersion({
        name: name,
    });

  // Extract the payload as a string.
    const payload = version.payload.data.toString();

  // WARNING: Do not print the secret in a production environment - this
  // snippet is showing how to access the secret material.
    console.info(`Payload: ${payload}`);
    return payload;
}

module.exports = {getGithubToken};