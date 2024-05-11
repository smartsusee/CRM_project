const lead_schema = require("./Schema");

const Post_data = async (req, res) => {
  const leads_data = lead_schema({
    ...req.body,
  });
  const Save_lead = await leads_data.save();
  res.json({ data: Save_lead, msg: "student details added" });
};
module.exports = { Post_data };
