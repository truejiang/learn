const path = require("node:path");

// 路径path，从路径中获取信息

const helloPath = "./hello.txt";

path.dirname(helloPath); // .
path.basename(helloPath); // hello.txt
path.extname(helloPath); // .txt
path.basename(helloPath, path.extname(helloPath)); // hello

// 使用路径
const name = "jojo";
path.join("/", "users", name, "hello.txt"); // /users/jojo/hello.txt
path.resolve("/", "users", name, "hello.txt"); // /users/jojo/hello.txt
