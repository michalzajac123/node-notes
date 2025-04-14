const jwt = require('jsonwebtoken');

module.exports = function (req, res ,next) {
    const authHeader = req.headers.authorization;

    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.sendStatus(401); //Brak tokena brak dostępu

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;
        next(); //przejście do kontrolera
    } catch (err) {
        res.status(403).json({ error: 'Invalid token'}) // token zły lub wygasł
    }
};