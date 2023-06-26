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


app.use(bodyParser.json());
app.use(cors());

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

app.post("/logs", (req, res) => {
    const { name, password } = req.body;

    db.execute(
        `SELECT * FROM users WHERE (name = ? OR email = ?) AND password = ?`,
        [name, name, password],
        (err, result) => {
            if (err) {
                console.log(err);
                res.send(err);
            } else {
                if (result.length > 0) {
                    // Successful login
                    res.json({ success: true });
                } else {
                    // Invalid username or password
                    res.json({ success: false });
                }
            }
        }
    );
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


app.get('/orders', (req, res) => {
    const { customer } = req.query;

    const query = customer
        ? `SELECT * FROM orders WHERE customer = '${customer}'`
        : 'SELECT * FROM orders';

    db.query(query, (err, result) => {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.json(result);
        }
    });
});


app.listen(3001, () => {
    console.log("Server running on port 3001");
});
