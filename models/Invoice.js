const { model, Schema } = require("mongoose");

const invoiceSchema = new Schema({
  email: String,
  user: String,
  name: String,
  date: String,
  amount: String,
  imageFile: String,
  status: String,
});

module.exports = model("Invoice", invoiceSchema);
