const User = require("../Model/userModel");

exports.signUp = async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      return res.json({ message: "email id already exist !!" });
    }

    const newUser = await User.create({ email, username, password });

    return res.json({ message: "user added successfully", email, username });
  } catch (err) {
    return res.json({ error: err.message });
  }
};

exports.signIn = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email }).select(
      "+password"
    );

    return !user ||
      !(await user.comparePassword(req.body.password, user.password))
      ? res.status(401).json({ message: "username or passoword wrong!!" })
      : res.json({ email: req.body.email, username: req.body.username });
  } catch (err) {
    res.json({ error: err.message });
  }
};
