// import { resolve } from "path";
// import { format } from "url";

const util = require("util");
const gc = require("./gcp-config");
const bucket = gc.bucket("s2first");

const uploadImage = async (file) => new Promise((resolve, reject)=>{

    const {originalname, buffer} = file;
    
    const blob = bucket.file(originalname.replace(/ /g, "_"));

    const blobStream = blob.createWriteStream({
        resumable: false
    });

    blobStream.on("finish", (result)=>{
        const url = util.format(`https://storage.googleapis.com/${bucket.name}/${blob.name}`)
        resolve(url);
    })
    .on("error", () =>{
        reject("Unable to upload image to Google Cloud Storage");
    })
    .end(buffer);
});

module.exports = {uploadImage};