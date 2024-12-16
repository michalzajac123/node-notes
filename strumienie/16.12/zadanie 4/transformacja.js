const fs = require('fs');

const {Transform} = require('stream');
const toUpperCase = new Transform({
    transform(chunk,encoding,callback){
        this.push(chunk.toString().toUpperCase());
        callback();
    }
});
fs.createReadStream("input.txt")
.pipe(toUpperCase)
.pipe(fs.createWriteStream("afterUpper.txt"))
.on("finish",()=>{
    console.log("Transformacja zakonczona.");
})