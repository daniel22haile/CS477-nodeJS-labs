/*
Create a http or https server which is listen to 3000 port.
The home page “/” which displays an html page with one input to enter any text message
User enter some message, then click “Submit” button
The user’s inputs are stored in a local file on the server side.
User will be redirect to home page after saving successfully.
*/

const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        fs.createReadStream('index.html').pipe(res); //the server responses to the client to display the html on browser
    } else if (url === '/sample' && method === 'POST') {
        const textBody = [];
        req.on('data', function(chunk) {
            textBody.push(chunk);
        })
        req.on('end', function() {
            const textBody = Buffer.concat(textBody).toString();
            console.log(textBody);
            fs.writeFile('myText.txt', function(err) {
                if (err) res.write('error');
                else res.end('text saved successfully');
            });
        });
    }

}).listen(3451, function() {
    console.log('server listening on port 3131');
});