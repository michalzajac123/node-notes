//zadanie 3
const fs = require("fs");   
const zlib = require("zlib");
fs.createReadStream("log.txt.zip")
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream("log_uncompressed.txt"))
    .on("finish",()=>{
        console.log("plik został zdekompresowany");
        
        fs.readFile("log_uncompressed.txt","utf-8",(err,data)=>{
            if(err){
                console.log("Błąd odczytu",err);
                return;
            }
            const lineCount = data.split("\n").length;
            console.log(`${lineCount}`);
        })
    });