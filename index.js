const sodium = require('tweetsodium');
const github = require('@actions/github');

async function run () {
    const octokit = github.getOctokit(process.argv[3])
    const repoPublicKey = await octokit.rest.actions.getRepoPublicKey({
        owner: 'VladimirZaets',
        repo: 'postMessages'
    });
    const publicKeyData = repoPublicKey.data;
    const key = "";
    const value = process.argv[2];
    const messageBytes = Buffer.from(value);
    const keyBytes = Buffer.from(publicKeyData.key, 'base64');

    const encryptedBytes = sodium.seal(messageBytes, keyBytes);
    const encrypted = Buffer.from(encryptedBytes).toString('base64');
    console.log(publicKeyData.key_id)
    octokit.rest.actions.createOrUpdateRepoSecret({
        owner: 'VladimirZaets',
        repo: 'postMessages',
        secret_name: '',
        encrypted_value: encrypted,
        key_id: publicKeyData.key_id
    })
}

run();
// Base64 the encrypted secret

