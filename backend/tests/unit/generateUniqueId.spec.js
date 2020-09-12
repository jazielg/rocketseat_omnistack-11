const generateUniqueId = require("../../src/utils/generateUniqueId");

describe("Generate Unique ID", () => {
  it("Should generate an unique ID", () => {
    const id = generateUniqueId();
    console.log(id);
    expect(id).toHaveLength(8);
  });
});
