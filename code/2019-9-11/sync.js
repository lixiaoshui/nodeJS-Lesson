//同步

//阻塞 或者 同步执行
//sync是同步的意思
const fs = require("fs");
const path = require("path");
var filePath = path.join(__dirname,"/file.txt");
var fileContent = fs.readFileSync(filePath);
console.log(fileContent.toString());
console.log("end!!!");
