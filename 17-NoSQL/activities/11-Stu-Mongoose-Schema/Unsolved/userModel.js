const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  // CODE HERE
  username: {
    type: String,
    trim: true,
    required: "String is Required"
  },
  password: {
    type: String,
    trim: true,
    required: "String is Required",
    validate: [({ length }) => length >= 6, "Longstring should be longer."]

  },
  email: {
    type: String,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  userCreated: {
    type: Date,
    default: Date.now
  },


});

const User = mongoose.model("User", UserSchema);

module.exports = User;
