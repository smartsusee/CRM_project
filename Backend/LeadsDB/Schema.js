const { type } = require("@testing-library/user-event/dist/type");
const mongoose = require("mongoose");

const lead_schema = mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Age: {
    type: Number,
    required: true,
  },
  MobileNo: {
    type: String,
    required: true,
  },
  Locations: {
    type: String,
    required: true,
  },

  DateToday: {
    type: String,
    required: true,
  },
  checked: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("leads_collection", lead_schema);
