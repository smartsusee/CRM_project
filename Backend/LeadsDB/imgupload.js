const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(cors());
mongoose
  .connect("mongodb://localhost:27017/reduxCrudApi_file", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("db is connected");
  })
  .catch(() => {
    console.log("db is not connected");
  });

const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
  imageUrl: String,
});

const Item = mongoose.model("Item", itemSchema);
app.use(express.json());
// app.use("/upload", express.static("/upload"));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../file_upload_fb/src/images");
    // cb(null, "./images");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.get("/items", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.post("/items", upload.single("image"), async (req, res) => {
  try {
    const { name, description } = req.body;
    const imageUrl = req.file ? req.file.filename : null;

    const newItem = new Item({ name, description, imageUrl });
    // const newItem = new Item({ imageUrl });

    await newItem.save();

    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put("/items/:id", upload.single("image"), async (req, res) => {
  try {
    const { name, description } = req.body;
    const imageUrl = req.file ? req.file.filename : null;

    const updatedItem = await Item.findByIdAndUpdate(
      req.params.id,
      { name, description, imageUrl },
      { imageUrl },

      { new: true }
    );

    if (!updatedItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete("/items/:id", async (req, res) => {
  try {
    const deletedItem = await Item.findByIdAndDelete(req.params.id);

    if (!deletedItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.json({ message: "Item deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
