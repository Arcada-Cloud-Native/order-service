const mongoose = require("mongoose");

const validateEmail = function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const orderSchema = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: true,
    validate: [validateEmail, "Please enter a valid email address"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address"
    ]
  },
  address: { type: String, required: true },
  town: { type: String, required: true },
  state: { type: String, required: true },
  date: { type: Date, required: true },
  phoneNumber: { type: String, required: true },
  zipCode: { type: Number, required: true },

  // PRODUCT
  productName: { type: String, required: true },
  productSize: { type: Number, required: true },
  productColor: { type: String, required: true },
  productPrice: { type: Number, required: true }
});

module.exports = mongoose.model("Order", orderSchema);
