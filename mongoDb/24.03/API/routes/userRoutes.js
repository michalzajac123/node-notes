const express = require("express");

const { check } = require("express-validator");

const app = express();

app.use(express.json());

const { getUsers , registerUser, loginUser } = require("../controllers/userController");

const router = express.Router();

//get 
app.get("/users",getUsers);


//regoster

router.post(
    "/register",
    [
        check("name","Imię musi mieć min 3 znaki").isLength({min: 3}), //check if name is at least 3 characters long
        check("email","Podaj poprawny email").isEmail(), // check if email is valid
        check("password", "Hasło musi mieć min 6 znaków").isLength({min: 6}) //check if password is at least 6 characters long
    ],
    registerUser
)
router.post(
    "/login",
    [
        check("email","Podaj poprawny email").isEmail(), //check if email is valid
        check("password","Haslo nie moze byc puste").exists() //check if password exists
    ],
    loginUser
)
module.exports = router;