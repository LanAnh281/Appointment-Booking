const { Account } = require("../models/index.model.js");
const jwt = require("jsonwebtoken");
const secret = "asdfghjkl!@#";
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

    if (documents) {
      jwt.sign(documents["_id"], secret, function (err, data) {
        return res.send({
          message: "success",
          token: data,
          role: documents["role"],
        });
      });
    } else {
      res.send({ message: "fail", status: "fail" });
    }
  } catch (error) {
    res.send({ message: error, status: "fail" });
  }
};
