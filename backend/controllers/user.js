import user from "../models/user.js";

export const crateUser = async (req, res, next) => {
  const newUser = new user(req.body);

  try {
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (err) {
    next(err);
  }
};
export const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await user.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
};
export const deleteUser = async (req, res, next) => {
  try {
    await user.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been Deleted");
  } catch (err) {
    next(err);
  }
};
export const getUser = async (req, res, next) => {
  try {
    const User = await user.findById(req.params.id);
    res.status(200).json(User);
  } catch (err) {
    next(err);
  }
};
export const getAllUser = async (req, res, next) => {
  try {
    const Users = await user.find();
    res.status(200).json(Users);
  } catch (err) {
    next(err);
  }
};