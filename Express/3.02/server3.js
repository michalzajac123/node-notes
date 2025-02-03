/*
 ZADANIE 1
 Dodaj trase z parametrem w sciezce (GET/hello/:name)
 - Jesli wchodzimy na /hello/Jan to serwer odpowiada "Witaj Jan!"
 - Jeśli brakuje parametru name (np. ktoś wejdzie na /hello/ ),zwrocmy komunikat o bledzie
*/
const express = require('express'); //import expressa
const app = express(); //inicjacja aplikacji express

app.get('/hello/:name', (req, res) => {
    const { name } = req.params;
    res.send("Witaj " + name + "!");
})
app.get('/hello/', (req, res) => {
    res.send('Brak parametru name');
})

app.listen(3000,()=>{
    console.log("Serwer Express dziala na http://localhost:3000/hello/");
})