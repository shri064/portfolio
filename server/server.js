// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const UsersMsg = require("./UserModel");
// require("dotenv").config({ path: "./.env" });

// const app = express();
// app.use(cors());
// app.use(express.json());

// const MONGO_URL ="mongodb+srv://waykuleshrihari2:Shri@1234@cluster0.edr59kt.mongodb.net/";
// mongoose
//   .connect(MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("DB Connection Successfully");
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// app.post("/user-message", async (req, res) => {
//   console.log(req.body);

//   try {
//     const user = new UsersMsg({
//       name: req.body.name,
//       email: req.body.email,
//       message: req.body.message,
//     });

//     const userMessage = await user.save();

//     if (userMessage) {
//       res.status(201).json({ message: "Your Message Is successfully Send" });
//     }
//   } catch (err) {
//     console.log(err);
//   }
// });

// app.listen(process.env.PORT, () => {
//   console.log(`Server Started on Port ${process.env.PORT}`);
// });

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const UsersMsg = require("./UserModel");
require("dotenv").config({ path: "./.env" });

const app = express();
app.use(cors());
app.use(express.json());

// Multer storage configuration
const storage = multer.diskStorage({
  destination: "./public/uploads",
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const extname = path.extname(file.originalname);
    cb(null, uniqueSuffix + extname);
  },
});

// Multer upload configuration
const upload = multer({ storage });

// Serve static files from the "public" directory
app.use(express.static("public"));

const MONGO_URL = "mongodb+srv://waykuleshrihari2:Shri%401234@cluster0.edr59kt.mongodb.net/mydatabase";
mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "mydatabase",
  })
  .then(() => {
    console.log("DB Connection Successfully");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.post("/user-message", upload.single("image"), async (req, res) => {
  console.log(req.body);

  try {
    const user = new UsersMsg({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
      image: req.file.filename, // Assuming the image field in the form is named "image"
    });

    const userMessage = await user.save();

    if (userMessage) {
      res.status(201).json({ message: "Your Message Is successfully Sent" });
    }
  } catch (err) {
    console.log(err);
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server Started on Port ${PORT}`);
});

