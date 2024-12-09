const fs = require('fs');
const zlib = require('zlib');

fs.createReadStream("destination.txt")
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream("destination.txt.gz"))
    .on("finish",()=>{
        console.log("Kompresja zakonczona.");
    })