const Cloud = require("@google-cloud/storage");
const path = require("path");

const serviceKey = path.join(__dirname, "gcpKeys.json");

const {Storage} = Cloud;

const storage =new Storage({
    keyFilename: serviceKey,
    projectId: "loud-run-demo-388010"
})

module.exports = storage;