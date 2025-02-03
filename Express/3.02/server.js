//inicjacja nowego projektu node: npm init -y
//instalacja express: npm install express

const express = require('express'); //import expressa
const app = express(); //inicjacja aplikacji express

//get - pobieranie danych
app.get('/', (req, res) => {
    //req request - żądanie  
    //res response - odpowiedź
    res.send('Witaj w Express!'); //wysłanie odpowiedzi
});

//nasłuchiwanie na porcie 3000
app.listen(3000,()=>{
    console.log("Serwer Express dziala na http://localhost:3000");
})