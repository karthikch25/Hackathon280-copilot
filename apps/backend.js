const express = require('express');
const mysql = require('mysql2');
const app = express();
const cors = require('cors');
const port = 3000;
app.use(cors());
app.use(express.json());
// MySQL connection
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'macroeconomic'
});

con.connect(err => {
    if (err) throw err;
    console.log('Connected to MySQL');
});

// Route to handle the query
app.get('/run-query', (req, res) => {
    con.query('select notes from annotation', (err, result, fields) => {
        if (err) throw err;
        res.json(result);
    });
});

app.post('/update-data', (req, res) => {
    const newValue = req.body.newValue;
    const sql = "update annotation set notes = ?";

    con.query(sql, [newValue], (err, result) => {
        if (err) throw err;
        res.json({ success: true, message: 'Data updated successfully' });
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
