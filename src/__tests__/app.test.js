const request = require("supertest");
const app = require("../app"); // Adjust the path if your app file is located elsewhere

describe("GET /health", () => {
  it("should return 200 OK", async () => {
    const res = await request(app).get("/health");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("status", "ok");
  });
});
