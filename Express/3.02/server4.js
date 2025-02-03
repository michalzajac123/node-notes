/*
Zadanie 3:
Formularz kontaktowy (GET /contact -> formularz, POST /contact-> odbieranie danych)
- Strona /contact wyświetla prosty formularz z polami: 
    - imię (name)
    - email (email)
    - wiadomość (message)
- po wysłaniu formularza metoda POST /concatac serwer ma wyswietlic potwierdzenie 
 -Dziekujemy za wiadomosc, [imie]! odpowiemy na adres [email] wkrótce.
*/
const express = require('express'); //import expressa
const server = express(); //inicjacja aplikacji express

server.use(express.json()); // middleware do parsowanai jsona
server.use(express.urlencoded({ extended: true }));// middleware do parsowania danych z formularza

server.get('/contact', (req, res) => {
    res.send(
        `
        <h1>Formularz kontaktowy</h1>
        <form method="post" action="/contact">
            <input type="name" placeholder="Podaje imie" name="name"> <br>
            <input type="email" placeholder="Podaj email" name="email"> <br> 
            <textarea name="message" placeholder="Wiadomość"></textarea> <br>
            <button type="submit">Wyślij</button>
        </form>
        `
    )
})
server.post('/contact', (req, res) => { 
    const { name, email, message } = req.body;
    res.send(`Dziękujemy za wiadomość, ${name}! odpowiemy na adres ${email} wkrótce.`);
})
server.listen(3000, () => {
    console.log("Serwer Express działa na http://localhost:3000/contact");
})