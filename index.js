const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const {uploadImage} = require("./helper");

const app = express();

console.log("Hello from inside Cloud Run");

const multerMid = multer({
});

app.disable("x-powered-by");
app.use(multerMid.single('file'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const PORT = process.env.PORT || 3003;

console.log(process.env.PORT);

app.get("/", (req, res, next) => {
  res.json("Hey there from inside Cloud Run!");
});

app.post("/upload-file", async (req, res, next)=>{
  try {
    let file = req.file;
  
    const publiclUrl = await uploadImage(file);
  
    res.status(200).json({
      message: "Uploaded image successfully",
      data: publiclUrl
    })
  } catch (error) {
    res.status(500).json(error);
  }
})

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
