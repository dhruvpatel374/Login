const mongoose = require("mongoose");

const noteSchema = mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    require: true,
    ref: "User",
  },

  title: {
    type: String,
    require: true,
    trim: true,
    index: true,
  },

  description: {
    type: String,
    trim: true,
  },

  pinned: {
    type: Boolean,
    default: false,
  },

  tags: { type: [String], uinque: true, index: true },

  dataOfCreation: {
    type: Date,
    default: Date.now(),
  },
});

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
