const app = require("express")();
const users = [
    { id: 1, name: "Adam", email: "cos@gmail.com"},
    { id: 2, name: "Kasia", email: "kasia@gmail.com"}
]
app.use(require("express").json());

app.get("/", (req, res) => {
    res.send("Witaj w sklepie internetowym")
});
app.get("/about", (req, res) => {   
    res.send("To jest przykładowe API sklepu internetowego");
})
app.get("/users", (req, res) => {
    res.send(users);
})
app.get("/users/:id", (req, res) => {
    const { id } = req.params.id;
    res.send(id)
    const user = users.find(user => user.id === parseInt(id));
    if(user) {
        res.send(user);
    } else {
        res.send("Nie ma takiego użytkownika");
    } 
})
app.post("/users", (req, res) => {
    const { name, email } = req.body;
    if(!name || !email) {
        res.send("Podaj imię i email");
        return res.status(400);
    }
    const newUser = {
        id: users.length + 1,
        name,
        email
    }
    users.push(newUser);
    res.send(newUser);
});
app.put("/users/:id", (req, res) => {
    const { id } = req.params.id;
    const { name, email } = req.body;
    const user = users.find(user => user.id === parseInt(id));
    if(user!=-1) {
        user.name = name;
        user.email = email;
        res.send(user);
        users[user.id-1] = user;
    } else {
        res.send("Nie ma takiego użytkownika");
    }
})
app.delete("/users/:id", (req, res) => {
    const { id } = req.params.id;
    const user = users.find(user=>user.id === parseInt(id));
    if(user!=-1) {
        users.splice(user.id-1, 1);
        res.send("Usunięto użytkownika o ID "+ id);
    } else {
        res.send("Nie ma takiego użytkownika");
    }
})

app.listen(3000, () => {    
    console.log("Serwer uruchomiony na porcie 3000 http://localhost:3000"); 
})