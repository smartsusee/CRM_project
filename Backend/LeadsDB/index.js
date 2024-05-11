const express = require("express");

const app = express();
const lead_schema = require("./Schema");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
// __________________ DB connection _____________________

mongoose
  .connect(process.env.DB)
  .then(() => {
    console.log(`db is connect`);
  })
  .catch(() => {
    console.log(`db is not connected`);
  });

// _____________________________________________

app.use(cors());

app.use(express.json());

// _________________ Leads Data Get__________________
app.get("/get", async (req, res) => {
  const view_data = await lead_schema.find({});
  res.json(view_data);
});
// __________________________________________________

// _________________ Leads Data Post__________________
app.post("/create", async (req, res) => {
  const leads_data = lead_schema({
    ...req.body,
  });
  const Save_lead = await leads_data.save();
  res.json({ data: Save_lead, msg: "student details added" });
});
// __________________________________________________

// ___________________ delete method_____________________
app.delete("/delete/:id", async (req, res) => {
  const del = await lead_schema.findByIdAndDelete(req.params.id);

  res.json("delete successfull");
});
// __________________________________________________

// __________________________ update method_________________

app.put("/update/:id", async (req, res) => {
  const update = await lead_schema.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true }
  );

  res.json(update);
});
// ______________________________________________________________

//  server creation
app.listen(process.env.PORT, () => {
  console.log(`server running port on:${process.env.PORT}`);
});
