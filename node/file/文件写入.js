const fs = require('fs');

// 写入文件
fs.writeFile('hello.txt', 'hello world', (err) => {
  if (err) throw err;
  console.log('文件写入成功');
});

// 对硬盘的操作
// 1 写入文件
// 2 读取文件
// 3 删除文件