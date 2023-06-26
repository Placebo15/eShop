const express = require("express");
const app = express();
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = mysql.createConnection({
    user: "newDB",
    host: 'localhost',
    password: 'onlinestore',
    database: "purchase_history"
});

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS

app.post("/insert", (req, res) => {
    const { query } = req.body;

    db.query(query, (err, result) => {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.send(result);
        }
    });
});

app.get("/logs", (req, res) => {
    db.query("SELECT * FROM users", (err, result) => {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.send(result);
        }
    });
});

app.post("/check-existing", (req, res) => {
    const { name, email } = req.body;

    const checkQuery = `SELECT COUNT(*) AS count FROM users WHERE name = '${name}' OR email = '${email}'`;
    db.query(checkQuery, (err, result) => {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            const count = result[0].count;
            const exists = count > 0;
            res.json({ exists });
        }
    });
});


app.listen(3001, () => {
    console.log("Server running on port 3001");
});
