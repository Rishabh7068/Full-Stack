const fs = require("fs");
// fs.writeFile('message.txt', "Hello word from node js", (err) => {
//     if (err) throw err;
//     console.log("The file has been saved!");
//   });
  fs.readFile("./message.txt","UTF-8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });