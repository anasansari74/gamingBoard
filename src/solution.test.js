const getPosition = require("./solution");

test("Moves along a board and gives back the co-ordinates and directoin", () => {
  expect(getPosition("MRMLMRM")).toBe("2 2 E");
});
