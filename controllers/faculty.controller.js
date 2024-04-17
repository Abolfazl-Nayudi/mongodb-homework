const { Faculty } = require('../model/schema');

const getAllUsers = async (req, res) => {
  try {
    const data = await Faculty.find({});
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getSignleUser = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const faculty = await Faculty.findOne({ _id });
    res.status(200).json(faculty);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const createUser = async (req, res) => {
  try {
    const newdata = await Faculty.create(req.body);
    res.status(201).json(newdata);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await Faculty.findByIdAndDelete(id);
    res.status(200).json(deletedUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllUsers,
  getSignleUser,
  createUser,
  deleteUser,
};
