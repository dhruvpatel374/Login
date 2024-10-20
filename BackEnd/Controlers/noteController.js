const Note = require("../Model/NoteModel");

exports.executeQuery = async (req, res) => {
  try {
    const userId = req.params.userId;
    const query = req.query.searchQuery;

    const fetchedNotes = await Note.find({ userId })
      .find({
        $or: [
          { title: new RegExp(query, "i") },
          { tags: new RegExp(query, "i") },
        ],
      })
      .sort("-pinned")
      .sort("dataOfCreation");

    res.status(201).json(fetchedNotes);
  } catch (error) {
    return res.status(400).send(err.message);
  }
};

exports.getNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params._id);
    res.status(200).json(note);
  } catch (error) {
    return res.status(400).send(err.message);
  }
};

exports.getNotes = async (req, res) => {
  try {
    const notes = await Note.find({ userId: req.params.userId })
      .sort("-pinned")
      .sort("dataOfCreation");

    res.status(200).json(notes);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

exports.createNote = async (req, res) => {
  try {
    const note = await Note.create(req.body);

    res.status(200).json(note);
  } catch (error) {
    return res.status(400).send(err.message);
  }
};

exports.updateNote = async (req, res) => {
  try {
    const updated = await Note.findByIdAndUpdate(req.params.userId, req.body);
    return res.status(201).json(updated);
  } catch (err) {
    return res.status(400).send(err.message);
  }
};

exports.deleteNote = async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.userId);
    return res.status(202).send("deleted");
  } catch (err) {
    return res.status(400).send(err.message);
  }
};
