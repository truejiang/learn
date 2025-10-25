const fs = require("node:fs");

// 读取文件
fs.readFile("hello.txt", (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});
