const express = require('express'); //import expressa
const server = express(); //inicjacja aplikacji express

server.use(express.json()); // middleware do parsowanai jsona

server.use(express.urlencoded({ extended: true })); // middleware do parsowania danych z formularza

//GET
server.get('/', (req, res) => {
    res.send(
        `
        <h1>Witaj w Express!</h1>
        <form action="/submit" method="POST">
            <label for="name">Podaj imię:</label>
            <input type="text" id="name" name="name" placeholder="Podaj imię"/>
            <button type='submit'>Wyslij</button>
        </form>
        `
    );
}); //wysłanie odpowiedzi

server.post('/submit', (req, res) => {
    const { name } = req.body;
    res.send(`Otrzymano dane z formularza: ${name}`);
}); 
server.listen(3000, () => {
    console.log("Serwer Express działa na http://localhost:3000");
}); //nasłuchiwanie na porcie 3000