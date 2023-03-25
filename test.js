const fs = require("fs");
const path = require("path");

console.log(__dirname);
console.log(__filename);
const a = [__dirname, "public/assets/landing/portfolio"];
const fileNames = path.join(...a);
const s = fs.readdirSync(fileNames);

console.log(s);
