import hotel from "../models/hotel.js";
import room from "../models/room.js";

export const createRoom = async (req, res, next) => {
  const roomId = req.params.hotelId;
  const newRoom = new room(req.body);

  try {
    const savedRoom = await newRoom.save();
    try {
      await room.findByIdAndUpdate(roomId, {
        $push: { rooms: savedRoom._id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedRoom);
  } catch (err) {
    next(err);
  }
};

export const updateRoom = async (req, res, next) => {
  try {
    const updatedRoom = await room.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedRoom);
  } catch (err) {
    next(err);
  }
};
export const deleteRoom = async (req, res, next) => {
  const hotelId = req.params.hotelId;

  try {
    await room.findByIdAndDelete(req.params.id);
    try {
        await hotel.findByIdAndUpdate(hotelId, {
          $pull: { rooms: req.params._id },
        });
      } catch (err) {
        next(err);
      }
    res.status(200).json("Room has been Deleted");
  } catch (err) {
    next(err);
  }
};
export const getRoom = async (req, res, next) => {
  try {
    const Room = await room.findById(req.params.id);
    res.status(200).json(Room);
  } catch (err) {
    next(err);
  }
};
export const getAllRoom = async (req, res, next) => {
  try {
    const Rooms = await room.find();
    res.status(200).json(Rooms);
  } catch (err) {
    next(err);
  }
};
