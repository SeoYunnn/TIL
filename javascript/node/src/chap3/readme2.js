import fs from "fs/promises";
//const fs = require('fs').promises;

async function main(){
    console.log('시작');
    let data;
    for(let i=1; i<=3; i++){
        data = await fs.readFile('./readme2.txt');
        console.log(`${i}번`,data.toString());
    }
    console.log('끝');
}

main();