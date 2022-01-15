const fs = require("fs");

fs.writeFileSync('notes.txt', "welcome to Node.js")

fs.appendFileSync('notes.txt', " I am learning node")