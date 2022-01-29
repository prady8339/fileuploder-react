const express = require('express');
const multer = require('multer');
const app = express();
const path = require('path')
const cors = require('cors');

app.use(cors());
const fileStorageEngine = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"./images");
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+"--"+file.originalname);
    }
})

const upload = multer({storage:fileStorageEngine});
app.get("/",(req,res)=>{
res.sendFile(path.join(__dirname,"index.html"));
})

app.post("/single",upload.single('image'),(req,res)=>{
    console.log(req.file);
    res.send("single file upload success")
});

app.post("/multiple",upload.array('images',3),(req,res)=>{
    console.log(req.file);
    res.send("multiple file uploaded");
})
app.listen(5050);
// https://www.youtube.com/watch?v=EVOFt8Its6I