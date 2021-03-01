const mongoose = require("mongoose");

const validateEmail = function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const orderSchema = mongoose.Schema({
  _id: {type: Number},
  userId: {type: String, required: true},
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: false,
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
  productId: {type: String, required: true},
  productName: { type: String, required: true },
  productSize: { type: Number, required: true },
  productColor: { type: String, required: true },
  productQuantity: { type: Number, required: true },
  productPrice: { type: Number, required: true },
  //INVOICE
  invoiceId: { type: Number },
  //SHIPPING
  shipping: {type: String, required: true, enum: ["DHL", "Posti", "UPS", "PostNord", "DPD", "TNT", "Bring", "Matkahuolto", "BudBee"]}
});

module.exports = mongoose.model("Order", orderSchema);
