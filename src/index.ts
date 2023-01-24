// const message: string = "Hello, world";

// console.log(message);

import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('文字列を入力してください：', (line) => {
  console.log(line + 100);
  rl.close();
});