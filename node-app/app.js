const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello from GitHub Actions Self-Hosted Runner!");
});

app.get("/health", (req, res) => {
    res.send("Application is healthy");
});

const PORT = 3001;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});
