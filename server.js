const express = require("express");
const sqlite3 = require("sqlite3");
const path = require("path");

const app = express();
const dbPath = path.join(__dirname, "sqlite.db");
const PORT = process.env.PORT || 3000;

const db = new sqlite3.Database(dbPath);

app.get("/employee", (req, res) => {
    const query = "SELECT * FROM employee";
    db.all(query, [], (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).json({ error: "Internal server error" });
        } else {
            res.json(rows);
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
