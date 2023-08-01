const { Account } = require("../models/index.model.js");
const jwt = require("jsonwebtoken");

exports.login = async (req, res, next) => {
  const { userName, password } = req.body;
  console.log(userName, password);
  try {
    const documents = await Account.findOne({
      where: {
        userName: userName,
        password: password,
      },
    });
    res.send({ message: documents, status: "success" });
  } catch (error) {
    res.send({ message: error, status: "faild" });
  }
};
