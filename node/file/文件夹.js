const fs = require("node:fs");

const folderPath = "./hello.txt";
// 检查文件夹是否存在
fs.access(folderPath, (err) => {
  if (err) {
    console.error("文件夹不存在");
    return;
  }
  console.log("文件夹存在");
});

// 创建文件夹
fs.mkdir("./hello");
fs.mkdirSync("./hello");

// 读取目录内容
fs.readdir();
fs.readdirSync();
fs.readdir("./hello", (err, files) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(files);
});

// 重命名文件夹
fs.rename();
fs.renameSync();
fs.rename("./hello", "./hello2", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("文件夹重命名成功");
});

// 删除文件夹
fs.rmdir("./hello2", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("文件夹删除成功");
});
fs.rmdirSync("./hello2");
fs.rm("./hello2", { recursive: true, force: true }, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("文件夹删除成功");
});
