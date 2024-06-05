let fs=require('fs')

let data=fs.readFileSync('check.txt')
console.log(data.toString());

let dataWrite=fs.writeFileSync("check2.txt","Created by kirubha")

let dataUpdate=fs.appendFileSync("check1.txt","Updated by kirubha ")

let dataDelete=fs.unlinkSync('check1.txt')
