import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    next(errorHandler(400, "All fields are required"));
    return; // Adicione um return para parar a execução caso os campos estejam ausentes
  }

  try {
    const hashedPassword = bcryptjs.hashSync(password, 12); // Ajuste para custo de hash 12
    const newUser = new User({ username, email, password: hashedPassword });

    await newUser.save();
    res.json("Signup successful");
  } catch (error) {
    next(error);
  }
};
