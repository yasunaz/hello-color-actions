const hello = require("./hello");
describe("My hello", () => {
  test("works", () => {
    expect(hello.hello()).includes("Hello World from Nijat!");
  });
});
