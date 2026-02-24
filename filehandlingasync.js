let fs=require("fs").promises;

async function writeFileAsync(){
    try{
        await fs.writeFile(
            "data.js",
            "console.log('Hello from datajs file');",
            "utf-8"
        );
        console.log("File written successfully");
    }
    catch(err){
        console.log("Error writing file",err);
    }
}

async function readFileAsync(){
    try{
        let data=await fs.readFile("sample.txt","utf-8");
        console.log("File data:",data);

    }
    catch(err){
        console.log("Error reading file",err);

    }
}
async function run(){

    await writeFileAsync();
    await readFileAsync();
}

run();