const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // createdAt and updatedAt fields}
  },
);
userSchema.index({ email: 1, name: 1 }, { unique: true });
module.exports = mongoose.model("User", UserSchema);
