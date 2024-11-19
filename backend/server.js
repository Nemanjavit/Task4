const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Zujosaurus90",
  database: "db2",
  port: 3306,
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.stack);
    return;
  }
  console.log("Connected to MySQL database.");
});

app.post("/users", (req, res) => {
  const sql = "INSERT INTO users (`email`,`password`) VALUES (?)";
  const values = [req.body.email, req.body.password];
  db.query(sql, [values], (err, data) => {
    if (err) {
      return res.json("Error");
    }
    return res.json(data);
  });
});

app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send("Database query failed");
    } else {
      res.json(results);
    }
  });
});

app.listen(5000, () => {
  console.log("listening");
});
