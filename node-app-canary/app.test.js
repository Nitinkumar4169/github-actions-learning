const request = require("supertest");

const app = require("./app");


test("GET / should return application message", async () => {

    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);

    expect(response.text)
    .toBe("Hello from GitHub Actions Self-Hosted Runner!");

});


test("GET /health should return healthy status", async () => {

    const response = await request(app).get("/health");

    expect(response.statusCode).toBe(200);

    expect(response.text)
    .toBe("Application is healthy");

});
