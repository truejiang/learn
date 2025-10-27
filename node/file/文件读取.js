const fs = require("node:fs");

// 读取文件
fs.readFile("hello.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});

// 同步写法
const data = fs.readFileSync("hello.txt", "utf8");
console.log(data.toString());

// promise写法
const fsPromise = require("node:fs/promises");
async function readFile() {
  try {
    const data = await fsPromise.readFile("hello.txt", "utf8");
    console.log(data.toString());
  } catch (err) {
    console.error(err);
  }
}
readFile();
