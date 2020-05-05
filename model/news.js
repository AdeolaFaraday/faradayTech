const mongoose = require("mongoose")
const { ObjectId } = mongoose.Schema

const newsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 32,
      unique: true
    },
    description: {
      type: String,
      required: true,
      unique: true,
      maxlength: undefined
    },
    category: {
      type: ObjectId,
      ref: "Category",
      required: true
    },
    photo: {
      data: Buffer,
      contentType: String
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model("News", newsSchema)
