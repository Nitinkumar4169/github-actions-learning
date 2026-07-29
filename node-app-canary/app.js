const express = require("express");
const client = require("prom-client");

const app = express();


// Enable default Node.js metrics
client.collectDefaultMetrics();


app.get("/", (req, res) => {
    res.send("Hello from canary Version v2");
});


app.get("/health", (req, res) => {
    res.send("Application is healthy");
});


// Prometheus metrics endpoint
app.get("/metrics", async (req, res) => {

    res.set("Content-Type", client.register.contentType);

    res.end(await client.register.metrics());

});


if (require.main === module) {

    const PORT = 3001;

    app.listen(PORT, "0.0.0.0", () => {
        console.log(`Server running on port ${PORT}`);
    });

}


module.exports = app;
