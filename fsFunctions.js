//Dependencies
const fs = require('fs');
const fsProm = require('fs').promises
const { strigify } = require('querystring')

//Write data to a file
const writeToFile = (file, content) =>
    fs.writeFile(file, JSON.stringify(content, null, 4), (err) =>
        err ? console.error(err) : console.info('Data written')
    );



    const readFromFile = (file) => {

    }


    module.exports = { readFromFile};