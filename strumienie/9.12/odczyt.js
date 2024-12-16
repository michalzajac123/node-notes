const fs = require('fs');

const readAbleStream = fs.createReadStream("example.txt", {encoding:"utf-8"});

readAbleStream.on("data",(chunk) => {
    console.log("Ottrzymano fragment danych: ", chunk);
})

readAbleStream.on("end", () => {
    console.log("Odczyt zakończony. ");
});

readAbleStream.on("error", (err) => {
    console.log("Bład oczytu: ", err);
});

