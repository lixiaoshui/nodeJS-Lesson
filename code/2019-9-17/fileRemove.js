const fs = require("fs");
const path = require("path");
var filePath = path.join(__dirname,"/file1.txt");
//表示删除特定元素 路径指向的必须是一个文件
//unlinkSync(文件路径)
fs.unlinkSync(filePath);

