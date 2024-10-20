const User = require("../Model/userModel.js");

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
      .select("-__v")
      .select("-password");
    return res.json(user);
  } catch (error) {
    return res.json({ message: error.message });
  }
};

exports.getUser = async (req, res) => {
  try {
    let user;

    if (req.body.email) {
      user = await User.findOne({ email: req.body.email });
    } else {
      user = await User.findOne({ username: req.body.username });
    }

    if (user && user.password === req.body.password) {
      return res.status(200).json({
        status: "success",
        user: user,
      });
    }
    return res.status(400).json({ message: "Enter valid data" });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.createUser = async (req, res) => {
  try {
    if (
      (await User.findOne({ email: req.body.email })) ||
      (await User.findOne({ username: req.body.username }))
    ) {
      return res.status(400).json({ message: "User Already exsits" });
    }

    const user = await User.create(req.body);
    return res.status(201).json({ status: "success", user });
  } catch (error) {
    res.json({
      status: "fail",
      data: error.message,
    });
  }
};
