const sodium = require('tweetsodium');
const github = require('@actions/github');

const key = "VtIgSKa0V1oKVr/w7E2GloJU9tZndwrpJ3tfuEIJkUk=";
const value = "vova_super";
console.log(process.argv);

const messageBytes = Buffer.from(value);
const keyBytes = Buffer.from(key, 'base64');


// Encrypt using LibSodium.
const encryptedBytes = sodium.seal(messageBytes, keyBytes);


// Base64 the encrypted secret
const encrypted = Buffer.from(encryptedBytes).toString('base64');

console.log(encrypted)
