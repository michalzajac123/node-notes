const fs = require('fs');
const readAbleStream = fs.createReadStream("example.txt");
const writAbleStream = fs.createWriteStream("destination.txt");

readAbleStream.pipe(writAbleStream)

writAbleStream.on("finish",()=>{
    console.log("Kopiowanie zakonczone.");
})