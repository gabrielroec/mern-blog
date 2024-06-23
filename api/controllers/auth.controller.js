import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  if (
    !email ||
    !password ||
    !username ||
    password === "" ||
    email === "" ||
    username === ""
  ) {
    return res.status(400).json({ status: "Bad Request" });
  }

  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({ username, email, password: hashedPassword });

  try {
    await newUser.save();
    res.json({ message: "User saved successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
