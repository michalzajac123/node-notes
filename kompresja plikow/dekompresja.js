const fs = require('fs');
const zlib = require('zlib');
fs.createReadStream("destination.txt.gz")
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream("destination2.txt"))
    .on("finish",()=>{
        console.log("Dekompresja zakonczona.");
    })  
