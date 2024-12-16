//Kopiowanie i kompresja

const fs = require('fs');
const zlib = require('zlib');

fs.createReadStream("source.txt")
    .pipe(fs.createWriteStream("copy.txt"))
    .on("finish",()=>{
        console.log("Kopiowanie zakonczone");
    
    fs.createReadStream("copy.txt")
        .pipe(zlib.createGzip())
        .pipe(fs.createWriteStream("copy.txt.zip"))
        .on("finish",()=>{
            console.log("kopwioanie zakonczone");
        });
});

