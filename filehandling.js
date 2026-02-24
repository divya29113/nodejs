console.log(__dirname);
console.log(__filename);

let fs=require("fs");

const myName="Divya";
const myPlace="india";
const greet=()=>{
    return "Hello world from backend";

}

fs.writeFileSync("sample.txt","This is sample text");
fs.writeFileSync("sample.txt","This is sample text");
fs.writeFileSync("sample.txt","This is sample text");
fs.appendFileSync("sample.txt","\nThis ia append text");
fs.appendFileSync("sample.txt","\nThis ia append text 2");
fs.appendFileSync("sample.txt","\nThis ia append text 3");
fs.appendFileSync("sample.txt","\nThis ia append text 4");
let data=fs.readFileSync("sample.txt","utf-8");
console.log(data);

module.exports={
    myName,
    
    myPlace,
    greet
};