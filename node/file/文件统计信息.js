const fs = require("node:fs");

// 文件统计信息

// 异步
fs.stat("./hello.txt", (err, stats) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(stats);
});

// 同步
try {
  const stats = fs.statSync("./hello.txt");
  console.log(stats);
} catch (err) {
  console.error(err);
}

// stats对象包含文件的统计信息
const stats = fs.statSync("./hello.txt");
stats.isFile(); // 是否是文件
stats.isDirectory(); // 是否是目录
stats.size; // 文件大小，单位字节
stats.isSymbolicLink(); // 是否是符号链接

// promise的写法
const fsPromise = require("node:fs/promises");
async function statFile() {
  try {
    const stats = await fsPromise.stat("./hello.txt");
    stats.isFile(); // 是否是文件
    stats.isDirectory(); // 是否是目录
    stats.size; // 文件大小，单位字节
    stats.isSymbolicLink(); // 是否是符号链接
    console.log(stats);
  } catch (err) {
    console.error(err);
  }
}
statFile();
