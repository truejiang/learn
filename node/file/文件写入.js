const fs = require("node:fs");

const content = "hello world";

// 写入文件
fs.writeFile("hello.txt", content, (err) => {
  if (err) throw err;
  console.log("文件写入成功");
});

// 对硬盘的操作
// 1 写入文件
// 2 读取文件
// 3 删除文件

// 同步写法
fs.writeFileSync("hello.txt", content);
console.log("文件写入成功");

// promise写法
const fsPromise = require("node:fs/promises");
fsPromise.writeFile("hello.txt", content).then(() => {
  console.log("文件写入成功");
});

// 追加写入
fs.appendFile("hello.txt", content, (err) => {
  if (err) throw err;
  console.log("文件追加写入成功");
});
