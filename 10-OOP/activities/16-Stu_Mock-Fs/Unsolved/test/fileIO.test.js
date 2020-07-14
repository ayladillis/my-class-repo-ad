const FileIO = require("../fileIO");

jest.mock("fs");

describe("FileIO", () => {
  describe("read", () => {
    it("should call fs.readFileSync with the passed in 'file' argument", () => {
      // Your code here
      var fileIO = new FileIO();
      var readIO = "message.txt"

      fs.readFileSync.mockReturnValue("hello farley"); 
      var output = fileIO.read(readIO);

      expect(output).toEqual("hello farley")
      expected(fs.readFileSync).lastCalledWith(readIO, "utf8")
    });
  });

  describe("write", () => {
    it("should call fs.writeFileSync with the passed in 'path' and 'data' arguments", () => {
      // Your code here
      var fileIO = new FileIO();
      var path = "message.txt"
      var data = 

      fs.writeFileSync.mockReturnValue("test 1 2 3");
      var input = fileIO.write(writeIO);

      expect(input).toEqual("test 1 2 3");
    });
  });
});
