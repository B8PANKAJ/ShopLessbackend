const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Usermodel = mongoose.model("ShoplessUser", UserSchema);
module.exports = Usermodel;
