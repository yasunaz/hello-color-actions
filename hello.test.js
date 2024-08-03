const hello = require("./hello");
describe("My hello", () => {
  test("works", () => {
    expect(hello.hello()).toContain("Hello World from Nijat!");
  });
});
