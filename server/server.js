const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const rateLimit = require('express-rate-limit');

dotenv.config();
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100 
});

const app = express();

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST, 
  user: process.env.DB_USER,
  password: process.env.DB_PASS, 
  database: process.env.DB_NAME 
});

db.connect((err) => {
  if (err) throw err;
  console.log('MySQL connected.');
});


app.use(limiter);

app.get('/api/test', (req, res) => {
  db.query('SELECT * FROM test', (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

app.listen(5000, () => {
  console.log('Sunucu 5000 portunda çalışıyor.');
});
