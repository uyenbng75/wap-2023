/*
 * Create a web server that's going to send a response of big image to any client that sends a request to your specified server:port 
 */

// const http = require('http');
// const fs = require('fs');
// const path = require('path');

// http.createServer((req, res) => {
//     fs.readFile(path.join(__dirname, 'image.jpg'), 'utf8', (error, data) => {
//         res.end(data);
//     });
// }).listen(3000);


/*--------------------------*/

const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const stream = fs.createReadStream(path.join(__dirname, 'image.jpg'));
    res.writeHead(200, { 'Content-Type': 'image/jpeg' });
    stream.pipe(res);
});

server.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`);
});
