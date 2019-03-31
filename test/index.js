var fs = require('fs');
var text = fs.readFileSync('./hello.txt',{encoding: 'utf8'});
console.log(text);

fs = writeFileSync('./hello1', 'my name is d');