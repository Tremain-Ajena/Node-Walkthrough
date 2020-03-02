const path = require ('path');
const fs = require('fs');
const request = require ('request')

let dataPath = path.join(_dirname, '../data.json');

request('https://reddit.com/r/popular.json', (err, response, body)=> {
    if(err) console.log(err);
    // console.log(response);
    fs.writeFile(dataPath, res.body, err => {
        if(err) console.log(err);
    })
});