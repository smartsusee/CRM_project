const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userAuthendication = require("./Schema");
const app = express();
const cors = require("cors");

const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/leadAuthentication")
  .then(() => {
    console.log("db  connected");
  })
  .catch(() => {
    console.log("db is not connected");
  });
app.use(cors());
app.use(express.json());
const validUser = (req, res, next) => {
  const token = req.header("auth");
  res.token = token;
  next();
};

app.get("/getdataAll", validUser, async (req, res) => {
  // token jwt.verify
  jwt.verify(res.token, process.env.TOKEN, async (err, data) => {
    if (err) {
      res.sendStatus(404);
    } else {
      // remove the password
      const data = await userAuthendication.find().select(["-password"]);

      res.json(data);
    }
  });
});

app.post("/create", async (req, res) => {
  const hasspassword = await bcrypt.hash(req.body.password, 7);
  const data = await userAuthendication({
    ...req.body,
    password: hasspassword,
  });

  const email = await userAuthendication.findOne({ email: req.body.email });

  if (email) return res.json("email already exists ");

  const savedata = await data.save();

  res.json({ datas: savedata, msg: "register successfuly" });
});

app.post("/login", async (req, res) => {
  try {
    const useremail = await userAuthendication.findOne({
      email: req.body.email,
    });

    if (!useremail) return res.status(400).json("email is not valid");

    const password_data = await bcrypt.compare(
      req.body.password,
      useremail.password
    );

    if (!password_data) return res.status(400).json("password is not valid");

    const token = jwt.sign({ email: useremail.email }, process.env.TOKEN);

    //   res.json({ token_create: token, msg: "!login success" });
    res.header("auth", token).json(token);
  } catch (err) {
    res.status(400).json(err);
  }
});

app.listen(process.env.PORT, () => {
  console.log("server created port no:", process.env.PORT);
});
