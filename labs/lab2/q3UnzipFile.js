/*
Using Node Stream API, create a script to unzip a file 
(after you zip it). (Use zlib.createGunzip() stream)
*/

const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const unzip = zlib.createGunzip();
const readable = fs.createReadStream(path.join(__dirname, 'destination.txt.gz'));
const writable = fs.createWriteStream(path.join(__dirname, 'unzippedFile.txt'));

readable.pipe(unzip).pipe(writable);