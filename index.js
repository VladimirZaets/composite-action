const sodium = require('tweetsodium');
const github = require('@actions/github');

async function run () {

    const octokit = github.getOctokit(process.argv[3])
    const publicKeyData = await octokit.rest.actions.getRepoPublicKey({
        owner: 'VladimirZaets',
        repo: 'postMessages'
    })
    console.log(JSON.stringify(publicKeyData))
    const key = "VtIgSKa0V1oKVr/w7E2GloJU9tZndwrpJ3tfuEIJkUk=";
    const value = process.argv[2];
    console.log(value);
    const messageBytes = Buffer.from(value);
    const keyBytes = Buffer.from(key, 'base64');


// Encrypt using LibSodium.
    const encryptedBytes = sodium.seal(messageBytes, keyBytes);
    const encrypted = Buffer.from(encryptedBytes).toString('base64');
}

// Base64 the encrypted secret

