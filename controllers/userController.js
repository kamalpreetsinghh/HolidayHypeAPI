const User = require("../models/user");

const getUser = async (req, res) => {
  try {
    const result = await User.findOne(req.params);

    if (result) {
      const { userID, firstName, lastName, email, password } = result;
      const userDetails = { userID, firstName, lastName, email, password };

      res.send(userDetails);
    } else {
      res.status(404).send({
        success: false,
        message: "The user with the given id was not found",
      });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const saveUser = async (req, res) => {
  const userDocument = new User(req.body);

  try {
    const result = await userDocument.save();
    res.send(result);
  } catch (error) {
    res.status(400).send(error.message);
    console.log(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const result = await User.findOneAndUpdate(req.params, req.body, {
      new: true,
      runValidators: true,
    });
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    const result = await User.deleteOne(req.params);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  getUser,
  saveUser,
  updateUser,
  deleteUser,
};
