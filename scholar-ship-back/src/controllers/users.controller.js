import { User } from "../models/user.model.js";

export const getUsers = async (req, res) => {
  const users = await User.find();

  res.send(users);
};

export const createUser = async (req, res) => {
  try {
    const { name, username, password, age } = req.body;

    const exist = await User.findOne({ username });

    if (exist) {
      return res.status(400).send({
        message: "User already exists",
      });
    }

    const user = await User.create({
      name,
      username,
      password,
      age,
    });

    res.send({
      user,
    });
  } catch (e) {
    res.status(500).send({
      message: e.message,
    });
  }
};
export const editUser = async (req, res) => {
  const id = req.params.id;
  const { name, username, age } = req.body;

  const user = await User.findById(id);

  user.name = name ?? user.name;
  user.username = username ?? user.username;
  user.age = age ?? user.age;

  console.log(user);

  await user.save();

  res.send(user);
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await User.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).send({
        message: "User not found",
      });
    }

    res.send(deleted);
  } catch (e) {
    res.status(500).send({
      message: "Something went wrong",
    });
  }
};