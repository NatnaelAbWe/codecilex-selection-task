const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  ingredients: [String],
  instructions: [String],
  time: Number,
  difficulty: String,
  rating: { type: Number, default: 5 },
  image: { type: String, default: "https://via.placeholder.com/300" },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Recipe", RecipeSchema);
