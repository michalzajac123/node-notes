const express = require('express');
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Witaj w moim API!');
});
app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`Szczegóły użytkownika o ID `+ userId);
});
app.post('/users', (req, res) => {
    const {name, email} = req.body;
    if(!name || !email) {
        res.send('Podaj imię i email'); 
        return res.status(400);
    }
    else{
        res.send('Dodano nowego użytkownika');
    }
});
app.put('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`Zaktualizowano dane użytkownika o ID `+ userId);
});
app.delete('/users/:id', (req, res) => {
    const userId = req.params.id;
    if(userId<1){
        res.send('Nie ma takiego użytkownika');
        return res.status(40);
    }
    else{
        return res.status(200).send('Usunięto użytkownika o ID '+ userId);
    }
})
app.use((req,res) => {
    res.status(404).send('404 - nie znaleziono');
});
app.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000 http://localhost:3000');
});