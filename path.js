let path=require("path");
console.log(path.basename(__filename));//file name with extension
console.log(path.basename(__dirname));//directory name
console.log(path.extname(__filename));//file extension

let os=require("os");
console.log(os.arch());//architecture of the os
console.log(os.platform());//platform o the os
console.log(os.freemem()/(1024*1024*1024));
console.log(os.totalmem()/(1024*1024*1024));
