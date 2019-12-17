require("dotenv").config();
let mysql = require("mysql");
let express = require("express");
let app = express();
let cors = require("cors");

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

let connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASS
});

connection.connect(err => {
  if (err) {
    console.log("Connection error: ", err.stack);
    return;
  }
  console.log("Connected as thread id: ", connection.threadId);
});

app.post("/get-postings", (req, res) => {
  console.log("endpoint hit!");
  connection.query("SELECT * FROM emploi", (err, rows) => {
    if (err) throw err;
    console.log(rows);
    res.send(JSON.stringify({ success: true, rows }));
  });
});

app.use("/", express.static("build"));

app.listen("4000", () => {
  console.log("Server up");
});
