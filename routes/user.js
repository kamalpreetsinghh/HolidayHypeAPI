const User = require("../models/user");
const express = require("express");
const router = express.Router();

router.get("/:id", (req, res) => {
  User.findOne({ userID: req.params.id })
    .then((result) => {
      if (result) {
        const { userID, firstName, lastName, email, password } = result;
        const userDetails = { userID, firstName, lastName, email, password };

        res.send(userDetails);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((error) => res.status(500).send(error.message));
});

router.post("/insert", (req, res) => {
  const userDocument = new User({
    userID: req.body.userID,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  });

  userDocument
    .save()
    .then((result) => res.send(result))
    .catch((error) => res.status(400).send(error.message));
});

module.exports = router;
