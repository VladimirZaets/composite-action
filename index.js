const core = require('@actions/core');
const github = require('@actions/github');
const { readdirSync } = require('fs')

const getDirectories = source =>
    readdirSync(source, { withFileTypes: true })
        //.filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name)

console.log(JSON.stringify(getDirectories(`${__dirname}/javascript-client`)));
