const fs = require('fs');

const writAbleStream = fs.createWriteStream("Output.txt");

writAbleStream.write("Linia1. \n")
writAbleStream.write("Linia2. \n")
writAbleStream.write("Linia3. \n")
writAbleStream.end(); // Zakończenie zapisu.

writAbleStream.on("finish",()=>{
    console.log("Zapis zakończony. ");
})
writAbleStream.on("error",(err)=>{
    console.log("Błąd zapisu: ", err);
})